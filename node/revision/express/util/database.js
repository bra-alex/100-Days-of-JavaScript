const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete', 'root', 'a3221d.As3221d', {dialect: 'mysql'})

module.exports = sequelize

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