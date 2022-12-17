const express = require('express')

const authController = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.get('/login', authController.getLogin)
authRouter.post('/login', authController.postLogin)

authRouter.get('/signup', authController.getSignUp)
authRouter.post('/signup', authController.postSignUp)

authRouter.post('/logout', authController.postLogout)

module.exports = authRouter