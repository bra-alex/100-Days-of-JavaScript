const { validationResult } = require('express-validator')

const Product = require('../models/product.model')
const { errorHandler } = require('../controllers/error.controller')
const { default: next } = require('next')

function getAddProduct(req, res) {
    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
        errorMessage: null,
        oldInput: {
            name: '',
            imageURL: '',
            price: '',
            description: ''
        },
        errors: []
    })
}

async function getProducts(req, res) {
    try {
        const products = await Product.find({ userID: req.session.user._id })
        res.render('admin/products', {
            pageTitle: 'Products',
            products: products,
            path: '/admin/products'
        })
    } catch (e) {
        console.log(e);
    
        errorHandler(e, next)
    }
}

async function getEditProduct(req, res) {
    try {
        const editMode = req.query.edit

        if (!editMode) {
            return res.redirect('/')
        }

        const productId = req.params.productId

        const product = await Product.findById(productId)

        if (!product) {
            return res.redirect('/')
        }

        if (product.userID.toString() !== req.session.user._id.toString()) {
            return res.redirect('/')
        }

        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            errorMessage: null,
            product: product,
            oldInput: {
                name: product.name,
                imageURL: product.imageURL,
                price: product.price,
                description: product.description,
            },
            errors: []
        })
    } catch (e) {
        console.log(e);
    
        errorHandler(e, next)
    }
}

async function postAddProduct(req, res, next) {
    const name = req.body.name
    const image = req.file 
    const price = req.body.price
    const description = req.body.description
    const userID = req.session.user._id
     
    if(!image){
        return res.status(422).render('admin/edit-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            editing: false,
            errorMessage: 'Attached file is not supported',
            oldInput: {
                name: name,
                price: price,
                description: description
            },
            errors: []
        })
    }

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        let messages = errors.array().map(e => e.msg)
        const messagesSet = new Set(messages)
        messages = Array.from(messagesSet)

        return res.status(422).render('admin/edit-product', {
            pageTitle: 'Add Product',
            path: '/admin/add-product',
            editing: false,
            errorMessage: messages.join('\n'),
            oldInput: {
                name: name,
                price: price,
                description: description
            },
            errors: errors.array()
        })
    }

    try {
        const product = new Product({
            name: name,
            imageURL: image.path,
            price: price,
            description: description,
            userID: userID
        })

        await product.save()
        console.log('Saved');
        res.redirect('/admin/products')

    } catch (e) {
        console.log(e);
    
        errorHandler(e, next) 
    }
}

async function postEditProduct(req, res, next) {
    const id = req.body.productId
    const name = req.body.name
    const image = req.file
    const price = req.body.price
    const description = req.body.description
    const userID = req.session.user._id

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        let messages = errors.array().map(e => e.msg)
        const messagesSet = new Set(messages)
        messages = Array.from(messagesSet)

        return res.status(422).render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: true,
            errorMessage: messages.join('\n'),
            oldInput: {
                name: name,
                price: price,
                description: description
            },
            errors: errors.array()
        })
    }

    try {
        const product = await Product.findById(id)

        if (product.userID.toString() !== userID.toString()) {
            return res.redirect('/')
        }

        const editedProduct = {
            name,
            description,
            imageURL: image ? image.path : product.imageURL,
            price,
            userID
        }

        await Product.findByIdAndUpdate(id, editedProduct)
        res.redirect('/admin/products')

    } catch (e) {
        console.log(e);
    
        errorHandler(e, next)
    }
}

async function postDeleteProduct(req, res, next) {
    try {
        const id = req.body.productId

        await Product.deleteOne({ _id: id, userID: req.session.user._id })

        res.redirect('/admin/products')

    } catch (e) {
        console.log(e)

        errorHandler(e, next)
    }
}

module.exports = {
    getAddProduct,
    getProducts,
    getEditProduct,
    postAddProduct,
    postEditProduct,
    postDeleteProduct
}