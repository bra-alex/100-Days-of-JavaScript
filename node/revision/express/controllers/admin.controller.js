const { validationResult } = require('express-validator')

const Product = require('../models/product.model')

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
    }
}

async function postAddProduct(req, res) {
    const name = req.body.name
    const imageURL = req.body.imageURL
    const price = req.body.price
    const description = req.body.description
    const userID = req.session.user._id

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
                imageURL: imageURL,
                price: price,
                description: description
            },
            errors: errors.array()
        })
    }

    try {


        const product = new Product({
            name: name,
            imageURL: imageURL,
            price: price,
            description: description,
            userID: userID
        })
        await product.save()
        console.log('Saved');
        res.redirect('/admin/products')
    } catch (e) {
        console.log(e);
    }

}

async function postEditProduct(req, res) {
    const id = req.body.productId
    const name = req.body.name
    const imageURL = req.body.imageURL
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
                imageURL: imageURL,
                price: price,
                description: description
            },
            errors: errors.array()
        })
    }

    try {
        const editedProduct = {
            name,
            imageURL,
            description,
            price,
            userID
        }

        const product = await Product.findById(id)

        if (product.userID.toString() !== userID.toString()) {
            return res.redirect('/')
        }

        await Product.findByIdAndUpdate(id, editedProduct)
        res.redirect('/admin/products')
    } catch (e) {
        console.log(e);
    }
}

async function postDeleteProduct(req, res) {
    try {
        const id = req.body.productId

        await Product.deleteOne({ _id: id, userID: req.session.user._id })

        res.redirect('/admin/products')
    } catch (e) {
        console.log(e);
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