const fs = require('fs')
const path = require('path')
const https = require('https')
const helmet = require('helmet')
const express = require('express')
const passport = require('passport')
const cookieSession = require('cookie-session')
const { Strategy } = require('passport-google-oauth20')

require('dotenv').config()

const PORT = process.env.PORT

const OAuthConfig = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    COOKIE_KEY_1: process.env.COOKIE_KEY_1,
    COOKIE_KEY_2: process.env.COOKIE_KEY_2
}

const OAUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: OAuthConfig.CLIENT_ID,
    clientSecret: OAuthConfig.CLIENT_SECRET
}

function verifyCallback(accessToken, refreshToken, profile, done){
    console.log('profile', profile)
    done(null, profile)
}

passport.use(new Strategy(OAUTH_OPTIONS, verifyCallback))

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {

    done(null, id)
})


const app = express()

app.use(helmet())

app.use(cookieSession({
    name: 'session',
    maxAge: 24 * 60 * 60 * 1000,
    keys: [OAuthConfig.COOKIE_KEY_2, OAuthConfig.COOKIE_KEY_1]
}))

const regenerate = callback => {
	callback()
}

const save = callback => {
	callback()
}

app.use((req, res, next)=>{
	req.session.regenerate = regenerate
	req.session.save = save
	next()
})

app.use(passport.initialize())
app.use(passport.session())

function checkLoggedIn(req, res, next) {
    console.log(`User: ${req.user}`)

    const loggedIn = req.isAuthenticated() && req.user 

    if(!loggedIn){
        return res.status(401).json({
            error: 'You are not logged in'
        })
    }

    next()
}

app.get('/auth/google', 
    passport.authenticate('google', {
        scope: ['email']
    })
)

app.get('/auth/google/callback', 
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/failure'
    }),
    (req, res) => console.log('Signed in')
)

app.get('/auth/logout', (req, res) => {
    req.logout(err => {
        if(err){
            return err
        }
        res.redirect('/')
    })
}) 

app.get('/secret', checkLoggedIn, (req, res) => res.send('GBEMI WHAT YOU WANT SEE 😂'))

app.get('/failure', (req, res) => res.send('Failed to login'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

const server = https.createServer(options, app)

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))