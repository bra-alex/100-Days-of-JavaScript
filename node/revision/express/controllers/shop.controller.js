const fs = require('fs')
const path = require('path')

const Order = require('../models/order.model')
const Product = require('../models/product.model')

const { errorHandler } = require('../controllers/error.controller')

async function getIndex(req, res, next) {
    try {
        const products = await Product.find()
        res.render('shop/index', {
            pageTitle: 'Shop',
            products: products,
            path: '/'
        })
    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }

}

async function getProducts(req, res, next) {
    try {
        const products = await Product.find()
        res.render('shop/product-list', {
            pageTitle: 'Products',
            products: products,
            path: '/products'
        })
    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }
}

async function getProduct(req, res, next) {
    try {
        const productId = req.params.productId

        const product = await Product.findById(productId)
        res.render('shop/product-detail', {
            pageTitle: product.name,
            product: product,
            path: '/products'
        })
    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }
}

async function getCart(req, res, next) {
    try {

        const user = await req.user.populate('cart.items.productId', 'name')
        const cart = user.cart.items

        res.render('shop/cart', {
            pageTitle: 'Cart',
            cart: cart,
            // totalPrice: cart.totalPrice,
            path: '/cart'
        })

    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }
}

async function getOrders(req, res, next) {
    try {
        const orders = await Order.find({ 'user.userId': req.user._id })
        res.render('shop/orders', {
            pageTitle: 'Orders',
            orders: orders,
            path: '/orders',
        })

    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }
}

async function getInvoice(req, res, next) {
    const orderId = req.params.orderID
    try {
        const order = await Order.findById(orderId)

        if (!order) {
            throw new Error('Order not found')
        }

        const eligibile = order.user.userId.toString() === req.session._id.toString()

        if (!eligibile) {
            throw new Error('Unauthorised to access this file')
        }

        const invoiceName = 'invoice-' + orderId + '.pdf'
        const invoicePath = path.join('data', 'invoices', invoiceName)

        fs.readFile(invoicePath, (err, data) => {
            if (err) {
                console.log(err);
                return next(err)
            }
            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Disposition', 'attachment; filename="' + invoiceName + '"')
            res.send(data)
        })

    } catch (e) {
        console.log(e);
        errorHandler(e, next(e))
    }
}

function getCheckout(req, res) {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
    })
}

async function postCart(req, res, next) {
    const productId = req.body.productId
    try {
        const product = await Product.findById(productId)
        await req.user.addToCart(product)
        return res.redirect('/cart')

    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }
}

async function postCartDeleteItem(req, res, next) {
    const productId = req.body.productId
    try {

        await req.user.removeFromCart(productId)

    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }

    res.redirect('/cart')
}

async function postOrder(req, res, next) {
    try {
        const user = await req.user.populate('cart.items.productId')
        const productDetails = user.cart.items.map(p => {
            return { quantity: p.quantity, productData: { ...p.productId._doc } }
        })

        const order = new Order({
            user: {
                userId: req.user._id,
                username: req.user.username
            },
            products: productDetails
        })

        await order.save()
        await req.user.clearCart()

        console.log("Order Added");

        res.redirect('/orders')

    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }
}

module.exports = {
    getIndex,
    getProducts,
    getProduct,
    getCart,
    getOrders,
    getInvoice,
    getCheckout,
    postCart,
    postCartDeleteItem,
    postOrder
}