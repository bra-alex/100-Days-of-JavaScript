const fs = require('fs')
const path = require('path')
const https = require('https')
const helmet = require('helmet')
const express = require('express')

const PORT = 3000

const app = express()

app.use(helmet())

function checkLoggedIn(req, res, next) {
    const loggedIn = true //TODO

    if(!loggedIn){
        return res.status(401).json({
            error: 'You are not logged in'
        })
    }

    next()
}

app.get('/auth/google', (req, res) => {})
app.get('/auth/google/callback', (req, res) => {})
app.get('/auth/logout', (req, res) => {})

app.get('/secret', checkLoggedIn, (req, res) => res.send('GBEMI WHAT YOU WANT SEE 😂'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const server = https.createServer(options, app)

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))