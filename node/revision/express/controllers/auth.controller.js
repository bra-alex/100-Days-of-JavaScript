function getLogin(req, res){
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isLoggedIn: req.isLoggedIn
    })
}

function postLogin(req, res){
    res.setHeader('Set-Cookie', 'loggedIn=true')
    res.redirect('/')
}

module.exports = {
    getLogin,
    postLogin
}