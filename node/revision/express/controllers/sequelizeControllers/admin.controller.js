const { where } = require('sequelize');
const Product = require('../models/product.model')

function getAddProduct(req, res) {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    })
}

async function getProducts(req, res) {
    try {
        const products = await req.user.getProducts()
        res.render('admin/products', {
            pageTitle: 'Products',
            products: products,
            path: '/admin/products'
        })
    } catch (e) {
        console.log(e);
    }
}

async function postAddProduct(req, res) {
    const name = req.body.name
    const imageURL = req.body.imageURL
    const price = req.body.price
    const description = req.body.description
    
    try {
        await req.user.createProduct({
            name: name,
            imageURL: imageURL,
            price: price,
            description: description
        })
        
        console.log('Created');
        
        res.redirect('/admin/products')
    } catch (e) {
        console.log(e);
    }
}

async function getEditProduct(req, res) {
    const editMode = req.query.edit

    if(!editMode){
        return res.redirect('/')
    }

    const productId = req.params.productId

    const products = await req.user.getProducts({where: {id: productId}})
    const product = products[0]

    if(!product){
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

    try {
        await Product.update({
            name: name,
            imageURL: imageURL,
            price: price,
            description: description
        }, {
            where: {
                id: id
            }
        })
        res.redirect('/admin/products')

    } catch (e) {
        console.log(e);
    }
    
}

async function postDeleteProduct(req, res) {
    const id = req.body.productId

    try {
        await Product.destroy({
            where:{
                id: id
            }
        })
    
        res.redirect('/admin/products')
    } catch (e) {
        console.log(e);
    }
    
}

module.exports = {
    getAddProduct,
    getProducts,
    postAddProduct,
    getEditProduct,
    postEditProduct,
    postDeleteProduct
}