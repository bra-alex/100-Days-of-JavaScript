const express = require('express')
const { body } = require('express-validator')

const feedController = require('../controllers/feed.controller')

const feedRouter = express.Router()

feedRouter.get('/posts', feedController.getPosts)
feedRouter.get('/post/:postID', feedController.getPost)

feedRouter.post('/post',
    [
        body('title')
            .trim()
            .isLength({ min: 5 }),

        body('content')
            .trim()
            .isLength({ min: 5 })
    ],
    feedController.createPost
)

feedRouter.put('/post/:postID',
    [
        body('title')
            .trim()
            .isLength({ min: 5 }),

        body('content')
            .trim()
            .isLength({ min: 5 })
    ],
    feedController.updatePost
)

feedRouter.delete('/post/:postID', feedController.deletePost)

module.exports = feedRouter