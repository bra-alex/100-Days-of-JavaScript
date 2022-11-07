const launches = require('./launches.mongo')
const planets = require('./planets.mongo')

const DEFAULT_FLIGHT_NUMBER = 100

// const launch = {
//     flightNumber: 100,
//     mission: 'Mission to the west',
//     rocket: 'Explorer IS1',
//     target: 'Kepler-442 b',
//     launchDate: new Date(),
//     customers: ['GASA', 'FWA'],
//     upcoming: true,
//     success: true
// }

// saveLaunch(launch)

async function getAllLaunches(){
    return await launches.find({}, {
        '_id': 0, 
        '__v': 0
    })
}

async function getLatestFlightNumber(){
    const flightNumber = await launches
        .findOne()
        .sort('-flightNumber')

    if(!flightNumber){
        return DEFAULT_FLIGHT_NUMBER
    }

    return flightNumber.flightNumber
}

async function saveLaunch(launchData){
    try {
        const planet = await planets.findOne({keplerName: launchData.target})

        if(!planet){
            throw new Error('No matches found')
        }

        await launches.findOneAndUpdate({
            flightNumber: launchData.flightNumber
        }, launchData, {
            upsert: true
        })
        
    }catch(err){
        console.error(`Could not save launch data ${err}`)
    }
}

async function addNewLaunch(launch){
    const newFlightNumber = await getLatestFlightNumber() + 1
    const newLaunch = Object.assign(launch, {
        flightNumber: newFlightNumber,
        customers: ['GASA', 'FWA'],
        upcoming: true,
        success: true
    })

    await saveLaunch(newLaunch)
}

async function launchExists(launchID){
    return await launches.findOne({
        flightNumber: launchID
    })
}

async function abortLaunch(launchID){
    const aborted = await launches
        .updateOne({
            flightNumber: launchID
        },
        {
            upcoming: false,
            success: false
        })

    return aborted.modifiedCount === 1
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    launchExists,
    abortLaunch
}