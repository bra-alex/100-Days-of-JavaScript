require('dotenv').config()

const path = require('path')
const csrf = require('csurf')
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const rootDir = require('./util/path')
const authRouter = require('./routes/auth.route')
const shopRouter = require('./routes/shop.route')
const adminRouter = require('./routes/admin.route')

const User = require('./models/user.model')
const { mongoConnect } = require('./util/database')
const errorController = require('./controllers/error.controller')

const app = express()

const secret = process.env.SESSION_SECRET
const sessionStore = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: 'sessions',
})

const csrfProtection = csrf()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(rootDir, 'public')))

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}))

app.use(csrfProtection)

app.use(async (req, res, next) => {
    if (!req.session.user) {
        return next()
    }

    try {
        const user = await User.findById(req.session.user._id)
        req.user = user
        next()
    } catch (e) {
        console.log(e);
    }
    // Sequelize
    /*
    try {
        const user = await User.findByPk(1)
        req.user = user
        next()
    } catch (e) {
        console.log(e);
    }
    */
})

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn
    res.locals.csrfToken = req.csrfToken()
    next()
})

app.use(shopRouter)
app.use(authRouter)
app.use('/admin', adminRouter)

app.use(errorController.get404)

async function startServer() {
     
    await mongoConnect()
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