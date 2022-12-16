const User = require('../models/user.model')

function getLogin(req, res){
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isLoggedIn: req.session.isLoggedIn
    })
}

async function postLogin(req, res){
    try {
        const user = await User.findById('639491314ccf193e74c5746f')

        req.session.user = user
        req.session.isLoggedIn = true
        
        req.session.save((err) => {
            if(err){
                return console.error(err);
            }
            res.redirect('/')
        })

    } catch (e) {
        console.log(e);
    }
}

function postLogout(req, res){
    req.session.destroy((err) => {
        if(err){
            return console.error(err);
        }
        res.redirect('/')
    })
}

module.exports = {
    getLogin,
    postLogin,
    postLogout
}