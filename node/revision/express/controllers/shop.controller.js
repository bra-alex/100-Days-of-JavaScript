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

async function getCart(req, res) {
    try {
        const cart = await req.user.getCart()
        const products = await cart.getProducts()
        res.render('shop/cart', {
            pageTitle: 'Cart',
            products: products,
            // totalPrice: cart.totalPrice,
            path: '/cart'
        })
    } catch (e) {
        console.log(e);
    }

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
    try {
        const cart = await req.user.getCart()
        const products = await cart.getProducts({
            where: {id: productId}
        })

        let product;

        if (products.length > 0) {
            product = products[0]
        }

        let qty = 1

        if(!product){
            const product = await Product.findByPk(productId)
            cart.addProduct(product, {
                through: {qty: qty}
            })
            return res.redirect('/cart')
        }

        const oldQty = product.cartItem.qty
        qty = oldQty + 1

        cart.addProduct(product, {
            through: {qty: qty}
        })

        return res.redirect('/cart')
    } catch (e) {
        console.log(e);
    }

    /*
    const productId = req.body.productId
    Product.findByID(productId, product => {
        Cart.addProduct(productId, product.price)
    })
    res.redirect('/cart')
    */
}

async function postCartDeleteItem(req, res) {
    const productId = req.body.productId

    const cart = await req.user.getCart()
    const products = await cart.getProducts({
        where: {id: productId}
    })

    const product = products[0]

    await product.cartItem.destroy()
    
    res.redirect('/cart')

    /*
    const productId = req.body.productId
    Product.findByID(productId, product => {
        Cart.deleteProduct(productId, product.price)
    })
    res.redirect('/cart')
    */
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