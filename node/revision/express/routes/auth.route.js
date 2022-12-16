const express = require('express')

const authController = require('../controllers/auth.controller')

const authRouter = express.Router()

authRouter.get('/login', authController.getLogin)
authRouter.post('/login', authController.postLogin)

authRouter.post('/logout', authController.postLogout)

module.exports = authRouter