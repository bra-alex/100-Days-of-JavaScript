const fs = require('fs')
const path = require('path')
const { parse } = require('csv-parse')

const habitablePlanets = []

function isHabitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    && planet['koi_prad'] < 1.6
}

function loadPlanetsData() {
    const filePath = path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')
    return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
            .pipe(parse({
                comment: '#',
                columns: true
            }))
            .on('data', data => {
                if(isHabitable(data)){
                    habitablePlanets.push(data)
                }
            })
            .on('error', (error) => {
                console.log(error)
                reject(error)
            })
            .on('end', () => resolve())
        })
}

module.exports = {
    loadPlanetsData,
    planets: habitablePlanets
}
