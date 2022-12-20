const express = require('express')

const errorController = require('../controllers/error.controller')

const errorRouter = express.Router()

errorRouter.get(errorController.get404)

module.exports = errorRouter