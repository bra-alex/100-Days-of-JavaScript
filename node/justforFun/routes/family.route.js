const express = require ('express')

const {httpGetAllFamily, httpGetFamily} = require ('../routes/family.controller')

const familyRouter = express.Router()

familyRouter.get('/', httpGetAllFamily)
familyRouter.get('/:id', httpGetFamily)

module.exports = familyRouter
