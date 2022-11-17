const fs = require('fs')
const https = require('https')

require('dotenv').config()

const app = require('./app')

const { connectMongo } = require('./services/mongo')
const { fetchRecipes } = require('./model/recipes.model')

const PORT = process.env.PORT

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, app)

async function startServer(){
    await connectMongo() 
    await fetchRecipes()
    
    server.listen(PORT, () => console.log('Server running'))
}

startServer()