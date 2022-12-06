const Sequelize = require('sequelize')

const sequelize = require('../../util/database')

const Cart = sequelize.define('cart', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});

module.exports = Cart

// Old Model
/*
const fs = require('fs')
const path = require('path')

const rootDir = require('../util/path')

const filePath = path.join(rootDir, 'data', 'cart.json')

function getCartFromFile(cb){
    fs.readFile(filePath, (err, fileContent) => {
        if(err){
            return cb(null)
        }

        cb(JSON.parse(fileContent))
    })
}

module.exports = class Cart {
    static fetchCart(cb){
        getCartFromFile(cb)
    }

    static addProduct(id, productPrice) {
        getCartFromFile(cart => {
            const existingProductIndex = cart.products.findIndex(product => product.id === id)
            const existingProduct = cart.products.find(product => product.id === id)

            let updatedProduct;

            if(existingProduct){
                updatedProduct = {...existingProduct}
                updatedProduct.qty += 1
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProduct
            } else {
                updatedProduct = {id: id, qty: 1}
                cart.products = [...cart.products, updatedProduct]
            }

            cart.totalPrice += +productPrice

            fs.writeFile(filePath, JSON.stringify(cart), err => {
                if(err){
                    console.log(err)
                }
            })
        })
    }

    static deleteProduct(id, productPrice){
        getCartFromFile(cart => {
            if(!cart){
                return
            }


            const updatedCart = {...cart}

            const product = updatedCart.products.find(product => product.id === id)
            
            if(!product){
                return
            }

            const productQty = product.qty

            updatedCart.products = updatedCart.products.filter(product => product.id !== id)
            updatedCart.totalPrice -= (+productPrice * productQty)

            fs.writeFile(filePath, JSON.stringify(updatedCart), err => {
                if(err){
                    console.log(err)
                }
            })
        })
    }
}
*/