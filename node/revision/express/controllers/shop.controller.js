const Product = require('../models/product.model')

async function getIndex(req, res) {
    const products = await Product.fetchAll()
    res.render('shop/index', {
        pageTitle: 'Shop',
        products: products,
        path: '/'
    })
}

async function getProducts(req, res) {
    const products = await Product.fetchAll()
    res.render('shop/product-list', {
        pageTitle: 'Products',
        products: products,
        path: '/products'
    })

}

async function getProduct(req, res) {
    const productId = req.params.productId
    /*
    const product = await Product.findAll({
        where: {
            id: productId
        }
    })
    */

    const product = await Product.fetchProduct(productId)
    res.render('shop/product-detail', {
        pageTitle: product.name,
        product: product,
        path: '/products'
    })

}

async function getCart(req, res) {

    const cart = await req.user.getCart()

    res.render('shop/cart', {
        pageTitle: 'Cart',
        cart: cart,
        // totalPrice: cart.totalPrice,
        path: '/cart'
    })

    /*
    Cart.fetchCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = []
            for (const product of products) {
                const cartData = cart.products.find(prod => prod.id === product.id)
                if (cartData) {
                    cartProducts.push({ productData: product, qty: cartData.qty })
                }
            }
        })
    })
    */
}

async function postCart(req, res) {
    const productId = req.body.productId
    const product = await Product.fetchProduct(productId)
    await req.user.addToCart(product)
    return res.redirect('/cart')
}

async function postCartDeleteItem(req, res) {
    const productId = req.body.productId

    await req.user.deleteItemFromCart(productId)

    res.redirect('/cart')
}

async function postOrder(req, res) {
    await req.user.addOrder()

    res.redirect('/orders')
}

async function getOrders(req, res) {
    const orders = await req.user.getOrders()
    res.render('shop/orders', {
        pageTitle: 'Orders',
        orders: orders,
        path: '/orders'
    })

}

function getCheckout(req, res) {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
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