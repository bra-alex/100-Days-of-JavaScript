function getLogin(req, res){
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isLoggedIn: req.isLoggedIn
    })
}

function postLogin(req, res){
    req.session.isLoggedIn = true
    res.redirect('/')
}

module.exports = {
    getLogin,
    postLogin
}