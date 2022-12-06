const mongodb = require('mongodb')
const {getDb} = require('../util/database')

class Product {
    constructor(name, imageURL, price, description){
        this.name = name
        this.imageURL = imageURL
        this.description = description
        this.price = price
    }

    static async fetchAll(){
        const db = getDb().collection('products')
        try {
            return await db.find().toArray()
        } catch (e) {
            console.log(e);
        }
    }

    static async fetchProduct(id){
        const db = getDb().collection('products')
        try {
            return await db.findOne({_id: new mongodb.ObjectId(id)})
        } catch (e) {
            console.log(e);
        }
    }

    async save(){
        const db = getDb().collection('products')
        try {
            await db.insertOne(this)
        } catch (e) {
            console.log(e);
        }
    }

    async update(id){
        const db = getDb().collection('products')

        try {
            await db.updateOne(
                {_id: new mongodb.ObjectId(id)},
                {$set: this},
            )
        } catch (e) {
            console.log(e);
        }
    }

    static async delete(id){
        const db = getDb().collection('products')

        try {
            await db.deleteOne({_id: new mongodb.ObjectId(id)})
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = Product