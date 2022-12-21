const cors = require('cors')
const express = require('express')

const feedRouter = require('./routes/feed.route')

const PORT = 8080

const app = express()

app.use(express.json())

// app.use(cors({
//     origin: 'https://cdpn.io',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type', 'Authorization']
// }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Allow-Headers', 'Content-Type, Authorization')
})

app.use(feedRouter)

app.listen(PORT, () => console.log('Listening on port: ', PORT))