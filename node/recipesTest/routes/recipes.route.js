const express = require('express')

const { httpsGetRecipes } = require('./recipes.controller')

const recipeRouter = express.Router()

recipeRouter.get('/', httpsGetRecipes)

module.exports = recipeRouter
