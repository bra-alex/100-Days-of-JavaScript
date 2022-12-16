const Product = require('../models/product.model')
const Order = require('../models/order.model')

async function getIndex(req, res) {
    try { 
        const products = await Product.find()
        res.render('shop/index', {
            pageTitle: 'Shop',
            products: products,
            path: '/',
            isLoggedIn: req.isLoggedIn
        })
    } catch (e) {
        console.log(e);
    }

}

async function getProducts(req, res) {
    try {
        const products = await Product.find()
        res.render('shop/product-list', {
            pageTitle: 'Products',
            products: products,
            path: '/products',
            isLoggedIn: req.isLoggedIn
        })
    } catch (e) {
        console.log(e);
    }
}

async function getProduct(req, res) {
    try {
        const productId = req.params.productId

        const product = await Product.findById(productId)
        res.render('shop/product-detail', {
            pageTitle: product.name,
            product: product,
            path: '/products',
            isLoggedIn: req.isLoggedIn
        })
    } catch (e) {
        console.log(e);
    }
}

async function getCart(req, res) {
    const user = await req.user.populate('cart.items.productId', 'name')
    const cart = user.cart.items

    res.render('shop/cart', {
        pageTitle: 'Cart',
        cart: cart,
        // totalPrice: cart.totalPrice,
        path: '/cart',
        isLoggedIn: req.isLoggedIn
    })
}

async function postCart(req, res) {
    const productId = req.body.productId
    const product = await Product.findById(productId)
    await req.user.addToCart(product)
    return res.redirect('/cart')
}

async function postCartDeleteItem(req, res) {
    const productId = req.body.productId

    await req.user.removeFromCart(productId)

    res.redirect('/cart')
}

async function postOrder(req, res) {
    try {
        const user = await req.user.populate('cart.items.productId')
        const productDetails = user.cart.items.map(p => {
            return { quantity: p.quantity, productData: {...p.productId._doc} }
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
    }
}

async function getOrders(req, res) {
    try {
        const orders = await Order.find({'user.userId': req.user._id})
        res.render('shop/orders', {
            pageTitle: 'Orders',
            orders: orders,
            path: '/orders',
            isLoggedIn: req.isLoggedIn
        })
    } catch (e) {
        console.log(e);
    }
}

function getCheckout(req, res) {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
        isLoggedIn: req.isLoggedIn
    })
}

module.exports = {
    getIndex,
    getProducts,
    getProduct,
    getCart,
    postCart,
    postCartDeleteItem,
    postOrder,
    getOrders,
    getCheckout
}