function getPosts(req, res) {
    res.status(200).json({
        posts: {
            title: 'First Post',
            content: 'A post'
        }
    })
}

function createPost(req, res) {
    const title = req.body.title
    const content = req.body.content
    
    res.status(201).json({
        message: 'Post created',
        post: {
            id: new Date().toISOString(),
            title,
            content
        }
    })
}

module.exports = {
    getPosts,
    createPost
}