const express = require('express')
const path = require('path')

const planetRouter = require('./routes/planets.router')
const postRouter = require('./routes/posts.router')
const picturesRouter = require('./routes/pictures.router')

const app = express()

const viewPath = path.join(__dirname, 'views')
app.set('views', viewPath)
app.set('view engine', 'hbs')

const PORT = 3000

//Custom Middleware
app.use((req, res, next) => {
    const start = Date.now()
    next()
    const timeTaken = Date.now() - start
    console.log(`${req.method} ${req.baseUrl}${req.url}`)
    console.log(`Time Taken: ${timeTaken}ms`)
    
})

//Presenting a static site

let sitePath = path.join(__dirname, 'public')
app.use('/site', express.static(sitePath))

app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Test',
        caption: 'Test Complete'
    })
})

app.use('/posts', postRouter)
app.use(planetRouter)
app.use('/pictures', picturesRouter)

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))