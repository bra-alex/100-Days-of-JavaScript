const express = require ('express')

const {httpGetAllLanguages} = require ('../routes/languages.controller')

const languagesRouter = express.Router()

languagesRouter.get('/', httpGetAllLanguages)

module.exports = languagesRouter