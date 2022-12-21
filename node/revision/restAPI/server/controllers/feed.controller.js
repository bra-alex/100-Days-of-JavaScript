const { validationResult } = require('express-validator')

const Post = require('../models/post.model')

async function getPosts(req, res) {
    try {
        const posts = await Post.find()
        res.status(200).json({
            posts
        })
        
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: `Couldn't fetch posts from database`
        })
    }
}

async function createPost(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Incorrect data provided',
            errors: errors.array()
        })
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
        res.status(500).json({
            message: `Couldn't save post to database`
        })
    }
}

module.exports = {
    getPosts,
    createPost
}