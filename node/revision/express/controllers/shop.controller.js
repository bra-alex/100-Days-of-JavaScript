const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const Order = require('../models/order.model')
const Product = require('../models/product.model')

const { errorHandler } = require('../controllers/error.controller')

const ITEMS_PER_PAGE = 1

async function getIndex(req, res, next) {
    const page = Math.abs(req.query.page) || 1
    const skip = (page - 1) * ITEMS_PER_PAGE

    try {
        const numOfProducts = await Product.find().countDocuments()
        const products = await Product
            .find()
            .skip(skip)
            .limit(ITEMS_PER_PAGE)

        res.render('shop/index', {
            pageTitle: 'Shop',
            products: products,
            path: '/',
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page < numOfProducts,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            lastPage: Math.ceil(numOfProducts / ITEMS_PER_PAGE)
        })
    } catch (e) {
        console.log(e);

        errorHandler(e, next)
    }
}

async function getProducts(req, res, next) {
    const page = Math.abs(req.query.page) || 1
    const skip = (page - 1) * ITEMS_PER_PAGE

    try {
        const numOfProducts = await Product.find().countDocuments()
        const products = await Product
            .find()
            .skip(skip)
            .limit(ITEMS_PER_PAGE)

        res.render('shop/product-list', {
            pageTitle: 'Products',
            products: products,
            path: '/products',
            currentPage: page,
            hasNextPage: ITEMS_PER_PAGE * page < numOfProducts,
            hasPreviousPage: page > 1,
            nextPage: page + 1,
            previousPage: page - 1,
            lastPage: Math.ceil(numOfProducts / ITEMS_PER_PAGE)
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

        const eligibile = order.user.userId.toString() === req.session.user._id.toString()

        if (!eligibile) {
            throw new Error('Unauthorised to access this file')
        }

        const invoiceName = 'invoice-' + orderId + '.pdf'
        const invoicePath = path.join('data', 'invoices', invoiceName)

        const pdfDoc = new PDFDocument()

        pdfDoc.pipe(fs.createWriteStream(invoicePath))
        pdfDoc.pipe(res)

        pdfDoc
            .font('Helvetica-Bold')
            .fontSize(24)
            .text('Invoice', {
                underline: true,
            })

        pdfDoc
            .font('Helvetica')
            .fontSize(14)
            .text('-------------------------------')

        let totalPrice = 0

        order.products.forEach(product => {
            totalPrice += product.quantity * product.productData.price
            pdfDoc
                .font('Helvetica')
                .text(`${product.productData.name} - ${product.quantity} x GH¢${product.productData.price}`)
        })

        pdfDoc.moveDown()

        pdfDoc
            .font('Helvetica')
            .text(`Total Price: GH¢${totalPrice}`)

        pdfDoc.end()

        res.setHeader('Content-Type', 'application/pdf; charset=UTF-8')
        res.setHeader('Content-Disposition', 'inline; filename="' + invoiceName + '"')
        /*
            fs.readFile(invoicePath, (err, data) => {
                if (err) {
                    console.log(err);
                    return next(err)
                }
                res.setHeader('Content-Type', 'application/pdf')
                res.setHeader('Content-Disposition', 'attachment; filename="' + invoiceName + '"')
                res.send(data)
            })

            const file = fs.createReadStream(invoicePath)

            res.setHeader('Content-Type', 'application/pdf')
            res.setHeader('Content-Disposition', 'attachment; filename="' + invoiceName + '"')

            file.pipe(res)
        */
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