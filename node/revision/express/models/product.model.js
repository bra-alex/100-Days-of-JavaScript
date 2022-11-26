const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')

function getProductFromFile(cb){
    fs.readFile(filePath, (err, fileContent) => {
        if(err){
            return cb([])
        }

        cb(JSON.parse(fileContent))
    })
}

const filePath = path.join(rootDir, 'data', 'products.json')

module.exports = class Product {
    constructor(name, imageURL, price, description){
        this.name = name
        this.imageURL = imageURL
        this.description = description
        this.price = price
    }

    save(){
        this.id = Math.random().toString()
        getProductFromFile(products => {
            products.push(this)
            fs.writeFile(filePath, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb){
        getProductFromFile(cb)
    }

    static findByID(id, cb){
        getProductFromFile(products => {
            const product = products.find(p => p.id === id)
            cb(product)
        })
    }
}