const https = require('https')

require('dotenv').config()

const app = require('./app')
const { connectMongo } = require('./services/mongo')

const PORT = process.env.PORT

const server = https.createServer(app)

async function startServer(){
    await connectMongo()
    server.listen(PORT, () => console.log('Server running'))
}

startServer()