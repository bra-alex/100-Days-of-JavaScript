const express = require('express')
const { body } = require('express-validator')

const feedController = require('../controllers/feed.controller')

const feedRouter = express.Router()

feedRouter.get('/posts', feedController.getPosts)
feedRouter.get('/posts/:postID', feedController.getPost)

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

module.exports = feedRouter