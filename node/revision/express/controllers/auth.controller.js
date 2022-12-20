require('dotenv').config()

const crypto = require('crypto')
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer')
const { validationResult } = require('express-validator')

const User = require('../models/user.model')
const { errorHandler } = require('../controllers/error.controller')

const transporter = nodemailer.createTransport({
    host: process.env.SENDGRID_SMTP_HOST,
    port: process.env.SENDGRID_SMTP_PORT,
    auth: {
        user: "apikey",
        pass: process.env.SENDGRID_API_KEY
    }
})

function getLogin(req, res) {
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        errorMessage: null,
        oldInput: {
            email: '',
            password: ''
        },
        errors: []
    })
}

function getSignUp(req, res) {
    res.render('auth/signup', {
        pageTitle: 'Sign Up',
        path: '/signup',
        errorMessage: null,
        oldInput: {
            username: '',
            email: '',
            password: ''
        },
        errors: []
    })
}

function getReset(req, res) {
    res.render('auth/reset', {
        pageTitle: 'Reset Password',
        path: '/reset',
        errorMessage: null
    })
}

async function getResetPassword(req, res, next) {
    try {
        const token = req.params.resetToken

        const user = await User.findOne({ resetToken: token, resetTokenExpiry: { $gt: Date.now() } })

        if (!user) {
            return res.redirect('/error')
        }

        res.render('auth/reset-password', {
            pageTitle: 'Reset Password',
            path: '/reset-password',
            errorMessage: req.session.errors,
            token: token,
            userId: user._id.toString()
        })

    } catch (e) {
        console.log(e);
        
        errorHandler(e, next)
    }

}

async function postLogin(req, res, next) {
    const email = req.body.email
    const password = req.body.password
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).render('auth/login', {
            pageTitle: 'Login',
            path: '/login',
            errorMessage: 'Invalid email or password',
            oldInput: {
                email: email,
                password: password
            },
            errors: errors.array()
        })
    }

    try {
        let user = await User.findOne({ email: email })

        if (!user) {
            user = await User.findOne({ username: email })
        }

        const passwordEqual = await bcrypt.compare(password, user.password)

        if (!passwordEqual) {
            return res.status(422).render('auth/login', {
                pageTitle: 'Login',
                path: '/login',
                errorMessage: 'Invalid email or password',
                oldInput: {
                    email: email,
                    password: password
                },
                errors: errors.array()
            })
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
        
        errorHandler(e, next)
    }
}

async function postSignUp(req, res, next) {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        let messages = errors.array().map(e => e.msg)
        const messagesSet = new Set(messages)
        messages = Array.from(messagesSet)
        return res.status(422).render('auth/signup', {
            pageTitle: 'Sign Up',
            path: '/signup',
            errorMessage: messages.join('\n'),
            oldInput: {
                username: username,
                email: email,
                password: password
            },
            errors: errors.array()
        })
    }

    try {
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
        
        errorHandler(e, next)
    }
}

function postLogout(req, res, next) {
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            
            errorHandler(e, next)
        }
        res.redirect('/')
    })
}

function postReset(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).render('auth/reset', {
            pageTitle: 'Reset Password',
            path: '/reset',
            errorMessage: errors.array()[0].msg
        })
    }

    crypto.randomBytes(32, async (err, buffer) => {
        if (err) {
            console.log(err);
            return res.redirect('/reset')
        }

        const resetToken = buffer.toString('hex')

        try {
            const user = await User.findOne({ email: req.body.email })

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
            
            errorHandler(e, next)
        }
    })
}

async function postResetPassword(req, res, next) {
    const userId = req.body.userId
    const token = req.params.resetToken
    const password = req.body.newPassword

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        let messages = errors.array().map(e => e.msg)
        const messagesSet = new Set(messages)
        messages = Array.from(messagesSet)

        req.session.errors = messages.join('\n')

        return res.status(422).redirect(`/reset/${token}`)
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
        req.session.errors = undefined

        await user.save()

        console.log('Password Reset');

        res.redirect('/login')

    } catch (e) {
        console.log(e);
        
        errorHandler(e, next)
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