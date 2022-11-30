const path = require('path')
const express = require('express')

const adminController = require('../controllers/admin.controller')

const adminRouter = express.Router()

adminRouter.get('/add-product', adminController.getAddProduct)
adminRouter.get('/edit-product/:productId', adminController.getEditProduct)
adminRouter.get('/products', adminController.getProducts)

adminRouter.post('/add-product', adminController.postAddProduct)
adminRouter.post('/edit-product', adminController.postEditProduct)
adminRouter.post('/delete-product', adminController.postDeleteProduct)

module.exports = adminRouter