const Product = require('../models/product.model')

function getIndex(req, res) {
    Product.fetchAll(products => {
        res.render('shop/index', {
            pageTitle: 'Shop',
            products: products,
            path: '/'
        })
    })
}

function getProducts(req, res) {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            pageTitle: 'Products',
            products: products,
            path: '/products'
        })
    })
}

function getProduct(req, res) {
    const productId = req.params.productId
    Product.findByID(productId, product => {
        console.log(product)
        res.render('shop/product-detail', {
            pageTitle: product.name,
            product: product,
            path: '/products'
        })
    })
}

function getCart(req, res) {
    res.render('shop/cart', {
        pageTitle: 'Cart',
        path: '/cart'
    })
}

function getOrders(req, res) {
    res.render('shop/orders', {
        pageTitle: 'Orders',
        path: '/orders'
    })
}

function getCheckout(req, res) {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    })
}

module.exports = {
    getIndex,
    getProducts,
    getProduct,
    getCart,
    getOrders,
    getCheckout
}