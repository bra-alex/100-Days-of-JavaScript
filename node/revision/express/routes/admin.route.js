const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const adminRouter = express.Router()

const products = []

adminRouter.get('/add-product', (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        activeAddProduct: true,
        productCSS: true,
        formCSS: true,
        path: '/admin/add-product'
    })
})

adminRouter.post('/add-product', (req, res) => {
    products.push({title: req.body.title})
    res.redirect('/')
})

module.exports = {
    adminRouter,
    products
}