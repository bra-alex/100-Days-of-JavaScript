const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

function getLogin(req, res) {
    let message = req.flash('error')
    if(message.length > 0){
        message = message[0]
    } else {
        message = null
    }

    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        errorMessage: message
    })
}

function getSignUp(req, res) {
    let message = req.flash('error')
    if(message.length > 0){
        message = message[0]
    } else {
        message = null
    }

    res.render('auth/signup', {
        pageTitle: 'Sign Up',
        path: '/signup',
        errorMessage: message
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
            req.flash('error', 'Invalid email or password')
            return res.redirect('/login')
        }

        const passwordEqual = await bcrypt.compare(password, user.password)

        if(!passwordEqual){
            req.flash('error', 'Invalid email or password')
            return res.redirect('/login')
        }

        req.session.user = user
        req.session.isLoggedIn = true

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
        const usernameIsEmpty = username.length < 1
        const emailIsEmpty = email.length < 1
        const passwordIsEmpty = password.length < 1
        const confirmPasswordIsEmpty = confirmPassword.length < 1
        
        const usernameExists = await User.findOne({ username: username })
        const emailExists = await User.findOne({ email: email })

        if (usernameIsEmpty || emailIsEmpty || passwordIsEmpty || confirmPasswordIsEmpty) {
            req.flash('error', 'All fields are required')
            return res.redirect('/signup')
        }

        if (usernameExists) {
            req.flash('error', 'Username in use')
            return res.redirect('/signup')
        }

        if (emailExists) {
            req.flash('error', 'E-mail has been used to register')
            return res.redirect('/signup')
        }

        if(confirmPassword !== password){
            req.flash('error', 'Passwords do not match')
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