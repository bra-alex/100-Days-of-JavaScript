const { post } = require('superagent')
const { getAllFamily } = require('../model/family.model')

function httpGetAllFamily(req, res){
    return res.status(200).json(getAllFamily())
}

function httpGetFamily(req, res){
    const id = +req.params.id
    const familyDetails = getAllFamily()
    const family = familyDetails[id]

    if(!family){
        return res.status(400).json({
            error: "Could not find member"
        })
    }

    return res.status(200).json(family)
}

module.exports = {
    httpGetAllFamily,
    httpGetFamily
}