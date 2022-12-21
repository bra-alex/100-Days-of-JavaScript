function errorHandler(e, next) {
    if(!e.statusCode){
        e.statusCode = 500
    }
    return next(e)
}

module.exports = errorHandler