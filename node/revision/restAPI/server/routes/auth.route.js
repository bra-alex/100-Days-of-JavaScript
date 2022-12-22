const express = require('express')
const { body } = require('express-validator')

const authController = require('../controllers/auth.controller')
const User = require('../models/user.model')

const authRouter = express.Router()

authRouter.put('/signup',
    [
        body('email')
            .trim()
            .normalizeEmail()
            .isEmail()
            .custom(async (value, { req }) => {
                const user = await User.findOne({ email: value })
                if (user) {
                    throw new Error('User already exists')
                }
                return true
            }),

        body('password')
            .trim()
            .isStrongPassword(),

        body('name')
            .trim()
            .not()
            .isEmpty()
    ],
    authController.signup
)

module.exports = authRouter