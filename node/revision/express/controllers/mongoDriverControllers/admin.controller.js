const Product = require('../models/product.model')

function getAddProduct(req, res) {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    })
}

async function getProducts(req, res) {
    const products = await Product.fetchAll()
    res.render('admin/products', {
        pageTitle: 'Products',
        products: products,
        path: '/admin/products'
    })
}

async function postAddProduct(req, res) {
    const name = req.body.name
    const imageURL = req.body.imageURL
    const price = req.body.price
    const description = req.body.description
    const userID = req.user._id

    const product = new Product(name, imageURL, price, description, userID)
    await product.save()
    console.log('Saved');
    res.redirect('/admin/products')
}

async function getEditProduct(req, res) {
    const editMode = req.query.edit

    if (!editMode) {
        return res.redirect('/')
    }

    const productId = req.params.productId

    const product = await Product.fetchProduct(productId)

    if (!product) {
        return res.redirect('/')
    }

    res.render('admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
    })

}

async function postEditProduct(req, res) {
    const id = req.body.productId
    const name = req.body.name
    const imageURL = req.body.imageURL
    const price = req.body.price
    const description = req.body.description
    const userID = req.user._id

    const product = new Product(name, imageURL, price, description, userID)

    await product.update(id)
    res.redirect('/admin/products')
}

async function postDeleteProduct(req, res) {
    const id = req.body.productId

    await Product.delete(id)

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