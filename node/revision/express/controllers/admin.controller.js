const Product = require('../models/product.model')

function getAddProduct(req, res) {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    })
}

function getProducts(req, res) {
    Product.fetchAll(products => {
        res.render('admin/products', {
            pageTitle: 'Products',
            products: products,
            path: '/admin/products'
        })
    })
}

function postAddProduct(req, res) {
    const name = req.body.name
    const imageURL = req.body.imageURL
    const price = req.body.price
    const description = req.body.description
    
    const product = new Product(name, imageURL, price, description)
     
    product.save()
    res.redirect('/')
}

module.exports = {
    getAddProduct,
    getProducts,
    postAddProduct
}