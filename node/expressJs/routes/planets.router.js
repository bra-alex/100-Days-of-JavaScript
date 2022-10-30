const express = require('express')

const planetsController = require('../controllers/planets.contoller')

const planetRouter = express.Router()

planetRouter.get('/planets', planetsController.getPlanets)
planetRouter.get('/planets/:planetID', planetsController.getPlanet)
planetRouter.get('/planetNames', planetsController.getPlanetNames)

module.exports = planetRouter