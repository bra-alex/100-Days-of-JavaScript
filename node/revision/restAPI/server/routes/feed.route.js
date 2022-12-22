const express = require('express')
const { body } = require('express-validator')

const feedController = require('../controllers/feed.controller')
const isAuthenticated = require('../middleware/isAuthenticated')

const feedRouter = express.Router()

feedRouter.get('/posts', isAuthenticated, feedController.getPosts)
feedRouter.get('/post/:postID', isAuthenticated, feedController.getPost)

feedRouter.post('/post',
    isAuthenticated,
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
    isAuthenticated,
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

feedRouter.delete('/post/:postID', isAuthenticated, feedController.deletePost)

module.exports = feedRouter