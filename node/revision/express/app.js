require('dotenv').config()

const path = require('path')
const csrf = require('csurf')
const multer = require('multer')
const express = require('express')
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const rootDir = require('./util/path')
const authRouter = require('./routes/auth.route')
const shopRouter = require('./routes/shop.route')
const adminRouter = require('./routes/admin.route')

const errorController = require('./controllers/error.controller')

const User = require('./models/user.model')
const { mongoConnect } = require('./util/database')
const isAuthenticated = require('./middleware/isAuthenticated')

const app = express()

const secret = process.env.SESSION_SECRET

const sessionStore = new MongoDBStore({
    uri: process.env.MONGO_URL,
    collection: 'sessions',
})

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer({ storage: fileStorage, fileFilter: fileFilter}).single('image'))

app.use(express.static(path.join(rootDir, 'public')))
app.use('/images', express.static(path.join(rootDir, 'images')))

app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}))

app.use(csrf())
app.use(flash())

app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn
    res.locals.csrfToken = req.csrfToken()
    next()
})

app.use(async (req, res, next) => {
    if (!req.session.user) {
        return next()
    }

    try {
        const user = await User.findById(req.session.user._id)

        if (!user) {
            return next()
        }

        req.user = user
        next()
    } catch (e) {
        console.log(e);

        errorController.errorHandler(e, next)
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

app.use(shopRouter)
app.use(authRouter)
app.use('/admin', adminRouter)

app.use(errorController.get404)

app.use((error, req, res, next) => {
    res.status(500).render('500', {
        pageTitle: 'Error',
        path: '',
    })
})

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