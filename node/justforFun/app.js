const express = require('express')
const morgan = require('morgan')

const familyRouter = require('./routes/family.route')
const friendsRouter = require('./routes/friends.route')
const languagesRouter = require('./routes/languages.route')

const app = express()

app.use(morgan('combined'))
app.use(express.json())

app.use('/family', familyRouter)
app.use('/friends', friendsRouter)
app.use('/languages', languagesRouter)

module.exports = app