const { 
    getAllLaunches, 
    addNewLaunch,
    launchExists,
    abortLaunch 
} = require('../../models/launches.model')

function httpGetAllLaunches(req, res){
    return res.status(200).json(getAllLaunches())
}

function httpAddNewLaunch(req, res){
    const launch = req.body

    if (!launch.mission || !launch.rocket || !launch.target || !launch.launchDate){
        return res.status(400).json({
            error: "Missing mission parameter"
        })
    }
    
    launch.launchDate = new Date(launch.launchDate)
    
    if(isNaN(launch.launchDate)){
        return res.status(400).json({
            error: "Wrong date input"
        })
    }

    addNewLaunch(launch)
    return res.status(201).json(launch)
}

function httpAbortLaunch(req, res){
    const launchID = +req.params.id

    if(!launchExists(launchID)){
        return res.status(404).json({
            error: "Launch does not exist"
        })
    }

    const aborted = abortLaunch(launchID)
    
    return res.status(200).json(aborted)
}

module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
    httpAbortLaunch 
}