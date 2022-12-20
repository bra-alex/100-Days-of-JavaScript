function errorHandler(e, next) {
    const error = new Error(e)
    error.httpStatusCode = 500
    return next(error)
}

function get404(req, res) {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: ''
    })
}


module.exports = {
    errorHandler,
    get404
}