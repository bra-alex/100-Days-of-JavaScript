const mongoose = require('mongoose')

const MONGO_URL = process.env.MONGO_URL

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