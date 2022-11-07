const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://nasa-api:2u2ZCfN8BTNn3Ywn@nasacluster.tkmevpp.mongodb.net/nasa?retryWrites=true&w=majority'

mongoose.connection.once('open', () => console.log('Connected'))

mongoose.connection.on('error', (err) => console.error(err))

async function mongoConnect(){
    return await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect(){
    await mongoose.disconnect()
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}