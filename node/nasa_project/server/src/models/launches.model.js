const launches = new Map()

let flightNumber = 100

const launch = {
    flightNumber: 100,
    mission: 'Mission to the west',
    rocket: 'Explorer IS1',
    target: 'Kepler-442 b',
    launchDate: new Date(),
    customers: ['GASA', 'FWA'],
    upcoming: false,
    success: true
}

launches.set(launch.flightNumber, launch)

function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLaunch(launch){
    flightNumber++
    launches.set(flightNumber, Object.assign(launch, {
        flightNumber: flightNumber,
        customers: ['GASA', 'FWA'],
        upcoming: true,
        success: true
    }))
}

module.exports = {
    getAllLaunches,
    addNewLaunch
}