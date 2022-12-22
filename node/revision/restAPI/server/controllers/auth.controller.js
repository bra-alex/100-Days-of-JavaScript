const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator');

const User = require('../models/user.model')
const errorHandler = require('../util/errorHandler')

async function signup(req, res, next) { 
    const errors = validationResult(req)
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    if (!errors.isEmpty()) {
        const e = new Error('Incorrect data provided')
        e.statusCode = 422
        e.data = errors.array()
        return errorHandler(e, next)
    }

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
        next(e)
    }
}

async function login(req, res, next) {
    const email = req.body.email
    const password = req.body.password

    try {

        const user = await User.findOne({ email: email})

        if (!user) {
            const e = new Error('User not found')
            e.statusCode = 404
            throw e
        }

        const equalPassword = await bcrypt.compare(password, user.password)

        if(!equalPassword){
            const e = new Error('Invalid email or password')
            e.statusCode = 422
            throw e
        }

        const token = jwt.sign({
            userId: user._id.toString(),
            email: user.email
        }, 'secret', {
            expiresIn: '1h'
        })

        res.status(200).json({
            message: 'Logged in successfully',
            token,
            userId: user._id.toString()
        })
    } catch (e) {
        errorHandler(e, next)
    }
}

module.exports = {
    signup,
    login
}