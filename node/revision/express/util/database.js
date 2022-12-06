const mongodb = require('mongodb');
require('dotenv').config()

const MongoClient = mongodb.MongoClient
const MONGO_URL = process.env.MONGO_URL

let _db;

async function mongoConnect() {
    try {
        const client = await MongoClient.connect(MONGO_URL)
        _db = client.db()

        console.log('Connected')
    } catch (e) {
        console.log(e)
        throw e
    }
}

const getDb = () => {
    if(_db){
        return _db
    }

    // throw 'No database found'
}

module.exports = {
    mongoConnect,
    getDb
}

// Sequelize
/*
const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'a3221d.As3221d', {dialect: 'mysql'})

module.exports = sequelize
*/

// mysql2 syntax
/*
const mysql = require('mysql2')

const connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'a3221d.As3221d'
})

module.exports = connectionPool.promise()
*/