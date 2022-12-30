const path = require('path')
const cors = require('cors')
const express = require('express')
const multer = require('multer')

const { mongoConnect } = require('./util/database')

const feedRoutes = require('./routes/feed.route')
const authRoutes = require('./routes/auth.route')

const PORT = 8080

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

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))


app.use(express.json())
app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(multer({ storage: fileStorage, fileFilter: fileFilter}).single('image'))

/*
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://cdpn.io')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Allow-Headers', 'Content-Type, Authorization')

    next()
})
*/

app.use('/feed', feedRoutes)
app.use('/auth', authRoutes)

app.use((error, req, res, next) => {
    console.log(error);
    res.status(error.statusCode).json({
        message: error.message,
        data: error.data
    })
})

async function startServer() {
    await mongoConnect()
    app.listen(PORT, () => console.log('Listening on port: ', PORT))
} 

startServer()
