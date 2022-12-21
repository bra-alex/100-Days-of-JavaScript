const path = require('path')
const express = require('express')
const Product = require('../models/product.model')

const isAuthenticated = require('../middleware/isAuthenticated')
const shopController = require('../controllers/shop.controller')

const shopRouter = express.Router()

shopRouter.get('/', shopController.getIndex)

shopRouter.get('/products', shopController.getProducts)
shopRouter.get('/products/:productId', shopController.getProduct)

shopRouter.get('/cart', isAuthenticated, shopController.getCart)

shopRouter.get('/checkout', isAuthenticated, shopController.getCheckout)
shopRouter.get('/checkout/cancel', isAuthenticated, shopController.getCheckout)
shopRouter.get('/checkout/success', isAuthenticated, shopController.postOrder)

shopRouter.get('/orders', isAuthenticated, shopController.getOrders)
shopRouter.get('/orders/:orderID', isAuthenticated, shopController.getInvoice)

shopRouter.post('/cart', isAuthenticated, shopController.postCart)
shopRouter.post('/cart-delete-item', isAuthenticated, shopController.postCartDeleteItem)

module.exports = shopRouter