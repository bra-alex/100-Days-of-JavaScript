const EventEmitter = require('events')
const celebrity = new EventEmitter()

//Observer 1
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log('Congratulations')
    }
})

// Observer 2
celebrity.on('race', (result) => {
    if (result === 'lost') {
        console.log('Boo, you suck')
    }
})

// Observer 3
celebrity.on('race', (result) => {
    if (result === 'win') {
        console.log(`Good job but I could've done better`)
    }
})

process.on('exit', (code) => console.log('Program exit with code: ', code))

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')