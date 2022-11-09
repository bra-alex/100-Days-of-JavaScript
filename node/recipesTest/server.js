const http = require('http')

require('dotenv').config()

const app = require('./app')
const { connectMongo } = require('./services/mongo')

const PORT = process.env.PORT

const server = http.createServer(app)

async function startServer(){
    await connectMongo()
    server.listen(PORT, () => console.log('Server running'))
}

startServer()