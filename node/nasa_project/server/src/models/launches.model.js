const launches = new Map()

const launch = {
    flightNumber: 100,
    mission: 'Mission to the west',
    rocket: 'Explorer IS1',
    target: 'Kepler-442 b',
    launchDate: new Date(),
    customers: ['GASA', 'FWA'],
    upcoming: true,
    success: true
}

launches.set(launch.flightNumber, launch)

function getAllLaunches(){
    return Array.from(launches.values())
}

module.exports = {
    getAllLaunches
}