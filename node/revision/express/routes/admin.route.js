const path = require('path')
const express = require('express')

const adminController = require('../controllers/admin.controller')

const adminRouter = express.Router()

adminRouter.get('/add-product', adminController.getAddProduct)
adminRouter.get('/products', adminController.getProducts)

adminRouter.post('/add-product', adminController.postAddProduct)

module.exports = adminRouter