const Product = require('../models/product.model')
const Cart = require('../models/cart.model')

async function getIndex(req, res) {
    try {
        const products = await Product.findAll()
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
        const products = await Product.findAll()
        res.render('shop/product-list', {
            pageTitle: 'Products',
            products: products,
            path: '/products'
        })
    } catch (e) {
        console.log(e)
    }

}

async function getProduct(req, res) {
    const productId = req.params.productId
    try {
        /*
        const product = await Product.findAll({
            where: {
                id: productId
            }
        })
        */

        const product = await Product.findByPk(productId)
        res.render('shop/product-detail', {
            pageTitle: product.name,
            product: product,
            path: '/products'
        })
        
    } catch (e) {
        console.log(e);
    }
    
}

function getCart(req, res) {
    Cart.fetchCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = []
            for (const product of products) {
                const cartData = cart.products.find(prod => prod.id === product.id)
                if (cartData) {
                    cartProducts.push({ productData: product, qty: cartData.qty })
                }
            }
            res.render('shop/cart', {
                pageTitle: 'Cart',
                products: cartProducts,
                totalPrice: cart.totalPrice,
                path: '/cart'
            })
        })
    })
}

function postCart(req, res) {
    const productId = req.body.productId
    Product.findByID(productId, product => {
        Cart.addProduct(productId, product.price)
    })
    res.redirect('/cart')

}

function postCartDeleteItem(req, res) {
    const productId = req.body.productId
    Product.findByID(productId, product => {
        Cart.deleteProduct(productId, product.price)
    })
    res.redirect('/cart')
}

function getOrders(req, res) {
    res.render('shop/orders', {
        pageTitle: 'Orders',
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
    getOrders,
    getCheckout
}