const Product = require('../models/product.model')

function getAddProduct(req, res) {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
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

async function postAddProduct(req, res) {
    const name = req.body.name
    const imageURL = req.body.imageURL
    const price = req.body.price
    const description = req.body.description
    
    const product = new Product(null, name, imageURL, price, description)
     
    const saveSuccessful = product.save()

    if (saveSuccessful) {
        return res.redirect('/')
    }
}

function getEditProduct(req, res) {
    const editMode = req.query.edit

    if(!editMode){
        return res.redirect('/')
    }

    const productId = req.params.productId

    Product.findByID(productId, product => {
        if(!product){
            return res.redirect('/')
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        })
    })

}

function postEditProduct(req, res) {
    const id = req.body.productId
    const name = req.body.name
    const imageURL = req.body.imageURL
    const price = req.body.price
    const description = req.body.description
    
    const product = new Product(id, name, imageURL, price, description)
     
    product.save()
    res.redirect('/admin/products')
}

function postDeleteProduct(req, res) {
    const id = req.body.productId
    Product.delete(id)

    res.redirect('/admin/products')
}

module.exports = {
    getAddProduct,
    getProducts,
    postAddProduct,
    getEditProduct,
    postEditProduct,
    postDeleteProduct
}