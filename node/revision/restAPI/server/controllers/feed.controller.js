const { validationResult } = require('express-validator')

function getPosts(req, res) {
    res.status(200).json({
        posts: [
            {
                _id: 1,
                title: 'First Post',
                content: 'A post',
                imageURL: 'images/rubber-ducky.jpg',
                creator: {
                    name: 'Alex A'
                },
                createdAt: new Date()
            }
        ]
    })
}

function createPost(req, res) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: 'Incorrect data provided',
            errors: errors.array()
        })
    }

    const title = req.body.title
    const content = req.body.content

    res.status(201).json({
        message: 'Post created',
        post: {
            _id: new Date().toISOString(),
            title,
            content,
            imageURL: 'images/rubber-ducky.jpg',
            creator: {
                name: 'Alex A'
            },
            createdAt: new Date()
        }
    })

}

module.exports = {
    getPosts,
    createPost
}