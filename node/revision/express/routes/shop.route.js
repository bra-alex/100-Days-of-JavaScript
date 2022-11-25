const path = require('path')
const express = require('express')

const rootDir = require('../util/path')

const {products} = require('./admin.route')

const shopRouter = express.Router()

shopRouter.get('/', (req, res) => {
    res.render('shop', {
        pageTitle: 'Shop',
        products: products,
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
        path: '/'
    })
    // console.log(products );
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = shopRouter