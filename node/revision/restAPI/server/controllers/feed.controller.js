const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator');

const Post = require('../models/post.model')
const User = require('../models/user.model')

const errorHandler = require('../util/errorHandler')

async function getPosts(req, res, next) {
    try {
        const page = Math.abs(req.query.page) || 1
        const limit = 2
        const totalItems = await Post.find().countDocuments()

        const posts = await Post
            .find()
            .skip((page - 1) * limit)
            .limit(limit)

        res.status(200).json({
            posts,
            totalItems
        })

    } catch (e) {
        console.log(e);
        errorHandler(e, next)
    }
}

async function getPost(req, res, next) {
    try {
        const postId = req.params.postID
        const post = await Post.findById(postId)

        if (!post) {
            const e = new Error('Post not found')
            e.statusCode = 404
            throw e
        }

        res.status(200).json({
            post
        })

    } catch (e) {
        console.log(e);
        errorHandler(e, next)
    }
}

async function createPost(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            const e = new Error('Incorrect data provided')
            e.statusCode = 422
            throw e
        }

        if (!req.file) {
            const e = new Error('No image provided.')
            e.statusCode = 422
            throw e
        }

        const title = req.body.title
        const content = req.body.content
        const imageURL = req.file.path
        const creator = req.userId

        const post = new Post({
            title,
            content,
            imageURL,
            creator
        })

        const addedPost = await post.save()
        console.log('Post created');

        const user = await User.findById(creator)
        user.posts.push(addedPost)

        await user.save()

        console.log();
        res.status(201).json({
            message: 'Post created',
            post: addedPost,
            creator: {
                _id: user._id,
                name: user.name
            }
        })
    } catch (e) {
        console.log(e);
        errorHandler(e, next)
    }
}

async function updatePost(req, res, next) {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            const e = new Error('Incorrect data provided')
            e.statusCode = 422
            throw e
        }

        const postId = req.params.postID
        const title = req.body.title
        const content = req.body.content
        const creator = req.userId
        let imageURL = req.body.image

        if (req.file) {
            imageURL = req.file.path
        }

        if (!imageURL) {
            const e = new Error('No image provided.')
            e.statusCode = 422
            throw e
        }

        const post = await Post.findById(postId)

        if (!post) {
            const e = new Error('Post not found')
            e.statusCode = 404
            throw e
        }

        if (post.creator.toString() !== req.userId.toString()) {
            const e = new Error('Unauthorised to update this post')
            e.statusCode = 403
            throw e
        }

        const updatedPost = {
            title,
            content,
            imageURL,
            creator
        }

        if (req.file) {
            deleteImage(post.imageURL)
        }

        await Post.findByIdAndUpdate(postId, updatedPost)
        console.log('Updated');

        res.status(200).json({
            message: 'Post updated',
            post: updatedPost
        })
    } catch (e) {
        console.log(e);
        errorHandler(e, next)
    }
}

async function deletePost(req, res, next) {
    try {
        const postId = req.params.postID

        const post = await Post.findById(postId)

        if (!post) {
            const e = new Error('Post not found')
            e.statusCode = 404
            throw e
        }

        if (post.creator.toString() !== req.userId.toString()) {
            const e = new Error('Unauthorised to delete this post')
            e.statusCode = 403
            throw e
        }

        deleteImage(post.imageURL)

        await Post.findByIdAndDelete(postId)
        console.log('Deleted');

        const user = await User.findById(req.userId)
        user.posts.pull(postId)

        await user.save()

        res.status(200).json({
            message: 'Post deleted'
        })
    } catch (e) {
        console.log(e);
        errorHandler(e, next)
    }
}

const deleteImage = filePath => {

    filePath = path.join(__dirname, '..', filePath)

    fs.unlink(filePath, (err) => {
        if (err) {
            throw new Error(err)
        }
    })
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}