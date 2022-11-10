const express = require('express')

const app = express()

const recipeRouter = require('./routes/recipes.route')

app.use(express.json())

app.use('/recipes', recipeRouter)

module.exports = app