const habitablePlanets = require('../models/planets.model')

function getPlanets(req, res) {
    res.json(habitablePlanets)
}

function getPlanet(req, res) {
    const planetID = +req.params.planetID
    const planet = habitablePlanets[planetID]

    if(planet){
        res.json(planet)
    } else {
        res.status(404).json({
            error: "Planet does not exist"
        })
    }
}

function getPlanetNames(req, res)  {
    res.send(habitablePlanets.map(planet => planet['kepler_name']).join('<br>'))
}

module.exports = {
    getPlanets,
    getPlanet,
    getPlanetNames
}