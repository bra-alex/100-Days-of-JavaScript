const express = require('express')

const authController = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.get('/login', authController.getLogin)
authRouter.post('/login', authController.postLogin)

authRouter.get('/signup', authController.getSignUp)
authRouter.post('/signup', authController.postSignUp)

authRouter.get('/reset', authController.getReset)
authRouter.post('/reset', authController.postReset)

authRouter.get('/reset/:resetToken', authController.getResetPassword)
authRouter.post('/reset/:resetToken', authController.postResetPassword)

authRouter.post('/logout', authController.postLogout)

module.exports = authRouter