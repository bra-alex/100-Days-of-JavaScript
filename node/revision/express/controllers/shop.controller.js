const Product = require('../models/product.model')

async function getIndex(req, res) {
    try {
        const products = await Product.find()
        res.render('shop/index', {
            pageTitle: 'Shop',
            products: products,
            path: '/'
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
            path: '/products'
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
            path: '/products'
        })
    } catch (e) {
        console.log(e);
    }
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