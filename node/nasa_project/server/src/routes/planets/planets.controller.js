const {planets} = require('../../models/planets.model')

function getAllPlanets(req, res){
    
    res.status(200).json(habitablePlanets)
}

module.exports = {
    getAllPlanets
}
