const mongoose = require('mongoose')
const Order = require('./order.model')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cart: {
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
})

userSchema.methods.addToCart = async function (product) {
    try {
        const cartItems = [...this.cart.items]
        const cartProductIndex = this.cart.items.findIndex(item => item.productId.toString() === product._id.toString())

        let quantity = 1

        if (cartProductIndex >= 0) {
            quantity = this.cart.items[cartProductIndex].quantity + 1
            cartItems[cartProductIndex].quantity = quantity
        } else {
            cartItems.push(
                {
                    productId: product._id,
                    quantity: quantity
                }
            )
        }

        const cart = { items: cartItems }

        this.cart = cart
        
        await this.save()
    } catch (e) {
        console.log(e);
    }
}

userSchema.methods.removeFromCart = async function (productId) {
    try {
        const cartItems = this.cart.items.filter(item => item.productId.toString() !== productId.toString())
        this.cart.items = cartItems

        await this.save()
        console.log("Removed");
    } catch (e) {
        console.log(e);
    }
}

userSchema.methods.clearCart = async function () {
    try {
        this.cart = { items: [] }
        await this.save()
    } catch (e) {
        console.log(e);
    }
}

module.exports = mongoose.model('User', userSchema)