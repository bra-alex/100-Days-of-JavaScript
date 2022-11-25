const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const rootDir = require('./util/path')
const shopRouter = require('./routes/shop.route')
const {adminRouter} = require('./routes/admin.route')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))

app.use(shopRouter)
app.use('/admin',adminRouter)

app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    })
})

app.listen(3000) 