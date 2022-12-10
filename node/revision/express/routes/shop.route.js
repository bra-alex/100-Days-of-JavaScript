const path = require('path')
const express = require('express')
const Product = require('../models/product.model')

const shopController = require('../controllers/shop.controller')

const shopRouter = express.Router()

shopRouter.get('/', shopController.getIndex)
shopRouter.get('/products', shopController.getProducts)
shopRouter.get('/products/:productId', shopController.getProduct)
shopRouter.get('/cart', shopController.getCart)
shopRouter.get('/orders', shopController.getOrders)
shopRouter.get('/checkout', shopController.getCheckout)

shopRouter.post('/cart', shopController.postCart)
shopRouter.post('/cart-delete-item', shopController.postCartDeleteItem)
shopRouter.post('/create-order', shopController.postOrder)

module.exports = shopRouter