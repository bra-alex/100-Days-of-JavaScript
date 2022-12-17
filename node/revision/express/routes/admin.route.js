const path = require('path')
const express = require('express')

const isAuthenticated = require('../middleware/isAuthenticated')
const adminController = require('../controllers/admin.controller')

const adminRouter = express.Router()

adminRouter.get('/add-product', isAuthenticated, adminController.getAddProduct)
adminRouter.get('/edit-product/:productId', isAuthenticated, adminController.getEditProduct)
adminRouter.get('/products', isAuthenticated, adminController.getProducts)

adminRouter.post('/add-product', isAuthenticated, adminController.postAddProduct)
adminRouter.post('/edit-product', isAuthenticated, adminController.postEditProduct)
adminRouter.post('/delete-product', isAuthenticated, adminController.postDeleteProduct)

module.exports = adminRouter