const path = require('path')
const cors = require('cors')
const express = require('express')

const { mongoConnect } = require('./util/database')

const feedRouter = require('./routes/feed.route')

const PORT = 8080

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))

/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Allow-Headers', 'Content-Type, Authorization')

    next()
})
*/

app.use('/feed', feedRouter)

app.use((error, req, res, next) => {
    res.status(error.statusCode).json({
        message: error.message
    })
})

async function startServer() {
    await mongoConnect()
    app.listen(PORT, () => console.log('Listening on port: ', PORT))
}

startServer()
