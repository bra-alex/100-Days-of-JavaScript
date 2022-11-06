const { getAllLanguages } = require('../model/hatedLanguages.model')

function httpGetAllLanguages(req, res){
    return res.status(200).json(getAllLanguages())
}

module.exports = {
    httpGetAllLanguages
}