const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

function getLogin(req, res) {
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: req.session.isAuthenticated
    })
}

function getSignUp(req, res) {
    res.render('auth/signup', {
        pageTitle: 'Sign Up',
        path: '/signup',
        isAuthenticated: req.session.isAuthenticated
    })
}

async function postLogin(req, res) {
    const email = req.body.email
    const password = req.body.password

    try {
        let user = await User.findOne({email: email})

        if(!user){
            user = await User.findOne({username: email})
        }
        
        if(!user){
            return res.redirect('/login')
        }

        const passwordEqual = await bcrypt.compare(password, user.password)

        if(!passwordEqual){
            return res.redirect('/login')
        }

        req.session.user = user
        req.session.isAuthenticated = true

        req.session.save((err) => {
            if (err) {
                return console.error(err);
            }
            res.redirect('/')
        })

    } catch (e) {
        console.log(e);
    }
}

async function postSignUp(req, res) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    try {
        const usernameExists = await User.findOne({ username: username })
        const emailExists = await User.findOne({ email: email })

        if (usernameExists || emailExists) {
            return res.redirect('/signup')
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
            cart: { items: [] }
        })

        await user.save()

        res.redirect('/login')
    } catch (e) {
        console.log(e);
    }
}

function postLogout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return console.error(err);
        }
        res.redirect('/')
    })
}

module.exports = {
    getLogin,
    getSignUp,
    postLogin,
    postSignUp,
    postLogout
}