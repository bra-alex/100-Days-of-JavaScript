const Sequelize = require('sequelize')
const sequelize = require('../util/database')

const Product = sequelize.define('product', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    imageURL: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Product

//old model
/*
const db = require('../util/database')
const Cart = require('../models/cart.model')


module.exports = class Product {
    constructor(id, name, imageURL, price, description){
        this.id = id
        this.name = name
        this.imageURL = imageURL
        this.description = description
        this.price = price
    }

    async save(){
        // mysql2 syntax
        /*
        return await db.execute(
            'INSERT INTO products (name, price, imageURL, description) VALUES (?, ?, ?, ?)',
            [this.name, this.price, this.imageURL, this.description]
        )
        
    }

    static delete(id){
        
    }

    static async fetchAll(){
        // mysql2 syntax
        /*
        return await db.execute('SELECT * FROM products')
        
    }

    static async findByID(id){
        // mysql2 syntax
        /*
        return await db.execute('SELECT * FROM products WHERE products.id = ?', [id])
        
    }
    
}
*/