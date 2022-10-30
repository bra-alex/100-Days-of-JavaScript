const posts = require('../models/posts.model')

function postPosts(req, res) {
    if(!req.body.title || !req.body.body){
        return res.status(400).json({
            error: 'Missing information'
        })
    }

    const newPost = {
        id: posts.length,
        title: req.body.title,
        body: req.body.body
    }

    posts.push(newPost)

    res.json(newPost)
}

function getPosts(req, res) {
    res.json(posts)
}

function getPost(req, res) {
    const postID = +req.params.postID
    const post = posts[postID]

    if(post){
        res.json(post)
    } else {
        res.status(400).json({
            error: 'Post not found'
        })
    }
}

module.exports = {
    postPosts,
    getPosts,
    getPost
}