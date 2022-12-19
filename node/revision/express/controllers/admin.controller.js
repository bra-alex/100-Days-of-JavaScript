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
        const products = await Product.find({userID: req.user._id})
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
        
        if(product.userID.toString() !== req.user._id.toString()){
            return res.redirect('/')
        }

        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        })
    } catch (e) {
        console.log(e);
    }
}

async function postAddProduct(req, res) {
    try {
        const name = req.body.name
        const imageURL = req.body.imageURL
        const price = req.body.price
        const description = req.body.description
        const userID = req.user._id

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
    try {
        const id = req.body.productId
        const name = req.body.name
        const imageURL = req.body.imageURL
        const price = req.body.price
        const description = req.body.description
        const userID = req.user._id

        const editedProduct = {
            name,
            imageURL,
            description,
            price,
            userID
        }

        const product = await Product.findById(id)

        if (product.userID.toString() !== userID.toString()){
            return res.redirect('/')
        }

        await product.update(editedProduct)
        res.redirect('/admin/products')
    } catch (e) {
        console.log(e);
    }
}

async function postDeleteProduct(req, res) {
    try {
        const id = req.body.productId

        await Product.deleteOne({ _id: id, userID: req.user._id })

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