const path = require('path')
const express = require('express')
const { body } = require('express-validator')

const isAuthenticated = require('../middleware/isAuthenticated')
const adminController = require('../controllers/admin.controller')

const adminRouter = express.Router()

adminRouter.get('/add-product', isAuthenticated, adminController.getAddProduct)
adminRouter.get('/edit-product/:productId', isAuthenticated, adminController.getEditProduct)
adminRouter.get('/products', isAuthenticated, adminController.getProducts)

adminRouter.post('/add-product', isAuthenticated,
    [
        body('name')
            .trim()
            .isString()
            .isLength({ min: 3 })
            .withMessage('Product name should not contain special characters and should be at least 3 characters long'),

        body('price')
            .trim()
            .isDecimal()
            .withMessage('Price must be a decimal'),

        body('description')
            .trim()
            .isLength({ min: 5 })
            .withMessage('Product description must be at least 5 characters long')
    ],
    adminController.postAddProduct
)

adminRouter.post('/edit-product', isAuthenticated,
    [
        body('name')
            .trim()
            .isString()
            .isLength({ min: 3 })
            .withMessage('Product name should not contain special characters and should be at least 3 characters long'),

        body('price')
            .trim()
            .isDecimal()
            .withMessage('Price must be a decimal'),

        body('description')
            .trim()
            .isLength({ min: 5 })
            .withMessage('Product description must be at least 5 characters long')
    ],
    adminController.postEditProduct
)

adminRouter.delete('/product/:productId', isAuthenticated, adminController.deleteProduct)

module.exports = adminRouter