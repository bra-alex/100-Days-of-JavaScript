const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator');

const User = require('../models/user.model')
const errorHandler = require('../util/errorHandler')

async function signup(req, res, next) { 
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const e = new Error('Incorrect data provided')
        e.statusCode = 422
        throw e
    }
    
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    try {
        const encryptedPassword = await bcrypt.hash(password, 12)

        const newUser = new User({
            name,
            email,
            password: encryptedPassword
        })

        const user = await newUser.save()

        res.status(201).json({
            message: 'User created',
            userId: user._id
        })
    } catch (e) {
        errorHandler(e, next)
    }
}

module.exports = {
    signup,
}