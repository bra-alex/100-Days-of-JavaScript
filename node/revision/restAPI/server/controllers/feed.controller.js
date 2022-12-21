const { validationResult } = require('express-validator');
const errorHandler = require('../util/errorHandler')

const Post = require('../models/post.model')

async function getPosts(req, res, next) {
    try {
        const posts = await Post.find()
        res.status(200).json({
            posts
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

        if(!post){
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
        errorHandler('Incorrect data provided', 422, next)
    }

    try {
        const title = req.body.title
        const content = req.body.content

        const post = new Post({
            title,
            content,
            imageURL: 'images/rubber-ducky.jpg',
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

module.exports = {
    getPosts,
    getPost,
    createPost
}