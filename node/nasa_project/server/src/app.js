const express = require('express')
const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')

const app = express()

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(morgan('combined'))

const sitePath = path.join(__dirname, '..', 'public')

app.use(express.json())
app.use(express.static(sitePath))

app.use(planetsRouter)
app.use(launchesRouter)

module.exports = app