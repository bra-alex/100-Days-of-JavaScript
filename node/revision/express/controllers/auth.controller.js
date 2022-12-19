require('dotenv').config()

const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')

const User = require('../models/user.model')

const transporter = nodemailer.createTransport({
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY
    }
})

function getLogin(req, res) {
    let message = req.flash('error')
    if (message.length > 0) {
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
    if (message.length > 0) {
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

function getReset(req, res) {
    let message = req.flash('error')
    if (message.length > 0) {
        message = message[0]
    } else {
        message = null
    }

    res.render('auth/reset', {
        pageTitle: 'Reset Password',
        path: '/reset',
        errorMessage: message
    })
}

async function getResetPassword(req, res) {
    try {
        const token = req.params.resetToken

        const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } })

        if (!user) {
            return res.redirect('/error')
        }

        let message = req.flash('error')
        if (message.length > 0) {
            message = message[0]
        } else {
            message = null
        }

        res.render('auth/reset-password', {
            pageTitle: 'Reset Password',
            path: '/reset-password',
            errorMessage: message,
            token: token,
            userId: user._id.toString()
        })
    } catch (e) {
        console.log(e);
    }

}

async function postLogin(req, res) {
    const email = req.body.email
    const password = req.body.password

    try {
        let user = await User.findOne({ email: email })

        if (!user) {
            user = await User.findOne({ username: email })
        }

        if (!user) {
            req.flash('error', 'Invalid email or password')
            return res.redirect('/login')
        }

        const passwordEqual = await bcrypt.compare(password, user.password)

        if (!passwordEqual) {
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

        if (confirmPassword !== password) {
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

        await transporter.sendMail({
            to: email,
            from: 'aalexanderkwaku@yahoo.co.uk',
            subject: 'Yayyyyy',
            html: '<h1> It worked </h1>'
        })
        console.log('sent')
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

function postReset(req, res) {
    crypto.randomBytes(32, async (err, buffer) => {
        if (err) {
            console.log(err);
            return res.redirect('/reset')
        }

        const resetToken = buffer.toString('hex')

        try {
            const user = await User.findOne({ email: req.body.email })

            if (!user) {
                req.flash('error', 'User not found.')
                return res.redirect('/reset')
            }

            user.resetToken = resetToken
            user.resetTokenExpiry = Date.now() + (60 * 60 * 1000)
            await user.save()

            res.redirect('/')

            await transporter.sendMail({
                to: req.body.email,
                from: 'aalexanderkwaku@yahoo.co.uk',
                subject: 'Password Reset',
                html: `
                    <p>You have requested to reset your password. This link is active for only one hour</p>
                    <p>Click <a href="http://localhost:3000/reset/${resetToken}">here</a> to reset your passowrd</p>
                `
            })
            console.log('Email sent');
        } catch (e) {
            console.log(e);
        }
    })
}

async function postResetPassword(req, res) {
    const userId = req.body.userId
    const token = req.params.resetToken
    const password = req.body.newPassword
    const confirmPassword = req.body.confirmPassword

    if (!password) {
        req.flash('error', 'Please enter a password')
        return res.redirect(`/reset/${token}`)
    }

    if (confirmPassword !== password) {
        req.flash('error', 'Passwords do not match')
        return res.redirect(`/reset/${token}`)
    }

    try {
        const user = await User.findOne(
            { 
                resetToken: token, 
                resetTokenExpiry: { $gt: Date.now() }, 
                _id: userId 
            })

        const newPassword = await bcrypt.hash(password, 12)

        user.password = newPassword
        user.resetToken = undefined
        user.resetTokenExpiry = undefined

        await user.save()

        console.log('Password Reset');

        res.redirect('/login')
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getLogin,
    getSignUp,
    getReset,
    getResetPassword,
    postLogin,
    postSignUp,
    postLogout,
    postReset,
    postResetPassword
}