const mongodb = require('mongodb')
const { getDb } = require('../util/database')

const ObjectId = mongodb.ObjectId

class User {
    constructor(username, email, cart = { items: [] }, id) {
        this.username = username
        this.email = email
        this.cart = cart
        this.id = id
    }

    static async findUser(id) {
        const db = getDb().collection('users')
        try {
            return await db.findOne({ _id: new ObjectId(id) })
        } catch (e) {
            console.log(e);
        }
    }

    async save() {
        const db = getDb().collection('users')
        try {
            await db.insertOne(this)
            console.log('User Added');
        } catch (e) {
            console.log(e);
        }
    }

    async getCart() {
        try {
            const db = getDb().collection('products')
            const productIds = this.cart.items.map(item => item.productId)

            const products = await db.find({
                _id: { $in: productIds }
            }).toArray()

            return products.map(product => {
                return { ...product, qty: this.cart.items.find(item => item.productId.toString() === product._id.toString()).qty }
            })
        } catch (e) {
            console.log(e);
        }
    }

    async addToCart(product) {
        try {
            const db = getDb().collection('users')

            const cartItems = [...this.cart.items]
            const cartProductIndex = this.cart.items.findIndex(item => item.productId.toString() === product._id.toString())

            let qty = 1

            if (cartProductIndex >= 0) {
                qty = this.cart.items[cartProductIndex].qty + 1
                cartItems[cartProductIndex].qty = qty
            } else {
                cartItems.push(
                    {
                        productId: product._id,
                        qty: qty
                    }
                )
            }

            const cart = { items: cartItems }

            await db.updateOne(
                { _id: new ObjectId(this.id) },
                {
                    $set:
                        { cart: cart }
                }
            )
        } catch (e) {
            console.log(e);
        }
    }

    async deleteItemFromCart(productId) {
        try {
            const db = getDb().collection('users')
            const cart = this.cart.items.filter(item => item.productId.toString() !== productId.toString())

            await db.updateOne(
                { _id: this.id },
                {
                    $set: {
                        cart: { items: cart }
                    }
                }
            )
        } catch (e) {
            console.log(e);
        }
    }

    async getOrders(){
        try {
            const db = getDb().collection('orders')
            return db.find({'user._id': this.id}).toArray()

        } catch (e) {
            console.log(e);
        }
    }

    async addOrder() {
        try {
            const db = getDb().collection('orders')
            const productDetails = await this.getCart()

            const order = {
                items: productDetails,
                user: {
                    _id: this.id,
                    username: this.username
                }
            }

            await db.insertOne(order)

            this.cart = { items: [] }
            await getDb()
                .collection('users')
                .updateOne(
                    { _id: this.id },
                    { $set: { cart: { items: [] } } }
                )
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = User