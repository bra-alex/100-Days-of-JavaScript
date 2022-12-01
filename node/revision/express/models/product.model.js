const db = require('../util/mysql')
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
        return await db.execute(
            'INSERT INTO products (name, price, imageURL, description) VALUES (?, ?, ?, ?)',
            [this.name, this.price, this.imageURL, this.description]
        )
    }

    static delete(id){
        
    }

    static async fetchAll(){
        return await db.execute('SELECT * FROM products')
    }

    static async findByID(id){
        return await db.execute('SELECT * FROM products WHERE products.id = ?', [id])
    }
    
}