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
            .not()
            .isEmpty()
            .withMessage('Please enter a product name')
            .escape(),

        body('imageURL')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please enter an image url')
            .isURL()
            .withMessage('Please enter a valid url'),

        body('price')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please enter a price')
            .isDecimal()
            .withMessage('Price must be a decimal'),

        body('description')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please enter a product description')
    ],
    adminController.postAddProduct
)

adminRouter.post('/edit-product', isAuthenticated,
    [
        body('name')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please enter a product name')
            .escape(),

        body('imageURL')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please enter an image url')
            .isURL()
            .withMessage('Please enter a valid url'),

        body('price')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please enter a price')
            .isDecimal()
            .withMessage('Price must be a decimal'),

        body('description')
            .trim()
            .not()
            .isEmpty()
            .withMessage('Please enter a product description')
    ],
    adminController.postEditProduct
)
adminRouter.post('/delete-product', isAuthenticated, adminController.postDeleteProduct)

module.exports = adminRouter