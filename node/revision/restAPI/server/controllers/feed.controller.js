const fs = require('fs');
const path = require('path')
const { validationResult } = require('express-validator');

const Post = require('../models/post.model')
const errorHandler = require('../util/errorHandler')

async function getPosts(req, res, next) {
    const page = Math.abs(req.query.page) || 1
    const limit = 2
    try {
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
    const postId = req.params.postID
    try {
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

    try {
        const title = req.body.title
        const content = req.body.content
        const imageURL = req.file.path

        const post = new Post({
            title,
            content,
            imageURL,
            creator: {
                name: 'Alex A'
            },
        })

        const addedPost = await post.save()

        res.status(201).json({
            message: 'Post created',
            post: addedPost
        })
    } catch (e) {
        console.log(e);
        errorHandler(e, next)
    }
}

async function updatePost(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const e = new Error('Incorrect data provided')
        e.statusCode = 422
        throw e
    }

    const postId = req.params.postID
    const title = req.body.title
    const content = req.body.content
    let imageURL = req.body.imageURL

    if (req.file) {
        imageURL = req.file.path
    }

    if (!imageURL) {
        const e = new Error('No image provided.')
        e.statusCode = 422
        throw e
    }

    try {
        const post = await Post.findById(postId)

        if (!post) {
            const e = new Error('Post not found')
            e.statusCode = 404
            throw e
        }

        const updatedPost = {
            title,
            content,
            imageURL,
            creator: {
                name: 'Alex A'
            },
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
    const postId = req.params.postID

    try {
        const post = await Post.findById(postId)

        if (!post) {
            const e = new Error('Post not found')
            e.statusCode = 404
            throw e
        }

        deleteImage(post.imageURL)

        await Post.findByIdAndDelete({ _id: postId })
        console.log('Deleted');

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