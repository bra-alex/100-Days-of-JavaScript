const express = require('express')

const picturesController = require('../controllers/pictures.controllers')

const picturesRouter = express.Router()

picturesRouter.get('/', picturesController.getImages)

module.exports = picturesRouter