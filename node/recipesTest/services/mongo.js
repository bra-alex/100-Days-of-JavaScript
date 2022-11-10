const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

mongoose.connection.once('open', () => console.log('Connected'))

mongoose.connection.on('error', (err) => console.error(err))

async function connectMongo () {
    return await mongoose.connect(MONGO_URL)
}

async function disconnectMongo() {
    return await mongoose.disconnect()
}

module.exports = {
    connectMongo,
    disconnectMongo
}