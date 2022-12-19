const express = require('express')
const { body } = require('express-validator')

const User = require('../models/user.model')
const authController = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.get('/login', authController.getLogin)
authRouter.get('/signup', authController.getSignUp)
authRouter.get('/reset', authController.getReset)
authRouter.get('/reset/:resetToken', authController.getResetPassword)

authRouter.post('/logout', authController.postLogout)

authRouter.post('/login',
    body('email')
        .custom(async (value, { req }) => {
            const email = await User.findOne({ email: value })
            const username = await User.findOne({ username: value })
            if (!email && !username) {
                throw new Error('Invalid email or password.')
            }
            return true
        }),
    authController.postLogin
)

authRouter.post('/signup',
    [
        body('username', 'Username must be at least 4 characters long and must not begin with a letter or special character.')
            .trim()
            .isLength({ min: 4 })
            .matches(/^(?![-_.0-9])(?!.*[-_.][-.])(?!.*[-.]$)[a-z0-9-_.]+$/)
            .custom(async (value, { req }) => {
                const user = await User.findOne({ username: value })
                if (user) {
                    throw new Error('Username already in use.')
                }
                return true
            }),

        body('email')
            .isEmail()
            .withMessage('Invalid email.')
            .custom(async (value, { req }) => {
                const user = await User.findOne({ email: value })
                if (user) {
                    throw new Error('Email already in use.')
                }
                return true
            })
            .normalizeEmail(),

        body('password', 'Password must be at least 6 characters long, contain at least 1 capital letter, 1 number and 1 special character.')
            .trim()
            .isStrongPassword(),

        body('confirmPassword')
            .trim()
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Passwords do not match.')
                }

                return true
            })
    ],
    authController.postSignUp
)

authRouter.post('/reset',
    body('email')
        .isEmail()
        .withMessage('Invalid email')
        .normalizeEmail(),
    authController.postReset
)

authRouter.post('/reset/:resetToken',
    [
        body('newPassword', 'Password must be at least 6 characters long, contain at least 1 capital letter, 1 number and 1 special character.')
            .trim()
            .isStrongPassword(),

        body('confirmPassword')
            .trim()
            .custom((value, { req }) => {
                if (value !== req.body.newPassword) {
                    throw new Error('Passwords do not match.')
                }

                return true
            })
    ],
    authController.postResetPassword
)


module.exports = authRouter