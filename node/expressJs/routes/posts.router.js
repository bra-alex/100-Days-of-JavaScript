const express = require('express')

const postsController = require('../controllers/posts.controller')

const postRouter = express.Router()

postRouter.use((req, res, next) => {
    console.log('Ip address: ', req.ip)
    next()
})
//POST requests
postRouter.post('/', postsController.postPosts)

//GET requests
postRouter.get('/', postsController.getPosts)
postRouter.get('/:postID', postsController.getPost)

module.exports = postRouter