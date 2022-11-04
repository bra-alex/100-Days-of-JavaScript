const { isMainThread, workerData, Worker } = require('worker_threads')

if(isMainThread){
    console.log(`Main Thread pid: ${process.pid}`)
    new Worker(__filename,{
        workerData: [9, 3, 5, 2, 5, 6, 0, 123, 4, 657, 334, 54767, 57868]
    })

    new Worker(__filename,{
        workerData: [99, 33, 15, 82, 25, ]
    })
} else{
    console.log(`Worker Thread pid: ${process.pid}`)
    console.log(`[${workerData}] sorted [${workerData.sort()}]`)
}