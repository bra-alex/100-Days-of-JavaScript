const fs = require('fs')
const path = require('path')
const rootDir = require('../util/path')
const Cart = require('../models/cart.model')

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
    constructor(id, name, imageURL, price, description){
        this.id = id
        this.name = name
        this.imageURL = imageURL
        this.description = description
        this.price = price
    }

    save(){
        getProductFromFile(products => {
            if (this.id) {
                const existingProductIndex = products.findIndex(p => p.id === this.id)
                const updatedProduct = [...products]
                updatedProduct[existingProductIndex] = this

                fs.writeFile(filePath, JSON.stringify(updatedProduct), (err) => {
                    if (err) {
                        console.log(err)
                    }
                })

            } else {
                this.id = Math.random().toString()
                products.push(this)

                fs.writeFile(filePath, JSON.stringify(products), (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
            }
        })
    }

    static delete(id){
        getProductFromFile(products => {
            const product = products.find(p => p.id === id)
            const updatedProducts = products.filter(p => p.id !== id)

            fs.writeFile(filePath, JSON.stringify(updatedProducts), (err) => {
                if (err) {
                    return console.log(err)
                }
                Cart.deleteProduct(id, product.price)
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