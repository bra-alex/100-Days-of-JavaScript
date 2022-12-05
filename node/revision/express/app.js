const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const rootDir = require('./util/path')
const shopRouter = require('./routes/shop.route')
const adminRouter = require('./routes/admin.route')

const errorController = require('./controllers/error.controller')

const sequelize = require('./util/database')
const Product = require('./models/product.model')
const User = require('./models/user.model')
const Cart = require('./models/cart.model')
const CartItem = require('./models/cartItem.model')
const Order = require('./models/order.model')
const OrderItem = require('./models/orderItem.model')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))

app.use(async (req, res, next) => {
    try {
        const user = await User.findByPk(1)
        req.user = user
        next()
    } catch (e) {
        console.log(e);
    }
})

app.use(shopRouter)
app.use('/admin', adminRouter)

app.use(errorController.get404)

async function startServer() {
    try {
        Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
        User.hasMany(Product)

        User.hasOne(Cart)
        Cart.belongsToMany(Product, {through: CartItem})
        Product.belongsToMany(Cart, {through: CartItem})

        Order.belongsTo(Order)
        User.hasMany(Order)
        Order.belongsToMany(Product, {through: OrderItem})

        await sequelize.sync({force: true})
        // await sequelize.sync()

        let user = await User.findByPk(1)
        if (!user) {
            user = await User.create({
                name: 'Alexander',
                email: 'test@test.com'
            })
        }

        let cart = await Cart.findOne({
            where: {userId: user.id}
        })

        if(!cart){
            await user.createCart()
        }
        
        app.listen(3000)
    } catch (e) {
        console.log(e);
    }
}

startServer()