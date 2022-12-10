const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const rootDir = require('./util/path')
const shopRouter = require('./routes/shop.route')
const adminRouter = require('./routes/admin.route')

const {mongoConnect} = require('./util/database')
const errorController = require('./controllers/error.controller')
const User = require('./models/user.model')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))

// app.use(async (req, res, next) => {
//     // const user = await User.findUser('638f71b9bbb4483f5123f772')
//     // req.user = new User(user.username, user.email, user.cart, user._id)
//     next()

//     // Sequelize
//     /*
//     try {
//         const user = await User.findByPk(1)
//         req.user = user
//         next()
//     } catch (e) {
//         console.log(e);
//     }
//     */
// })

app.use(shopRouter)
app.use('/admin', adminRouter)

app.use(errorController.get404)

async function startServer() {
    await mongoConnect()
    // const user = await User.findUser('638f71b9bbb4483f5123f772')

    // if(!user){
    //     const user = new User('braalex', 'test@test.com')
    //     await user.save()
    // }

    app.listen(3000)

    // Sequelize
    /*
    try {
        Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' })
        User.hasMany(Product)

        User.hasOne(Cart)
        Cart.belongsToMany(Product, {through: CartItem})
        Product.belongsToMany(Cart, {through: CartItem})

        Order.belongsTo(User)
        User.hasMany(Order)
        Order.belongsToMany(Product, {through: OrderItem})

        // await sequelize.sync({force: true})
        await sequelize.sync()

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
    */
}

startServer()