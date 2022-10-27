//Http request
//Protocol sensitive
//Can destructure into the functionality you want
//If request is used, you have to use request.end()

const { get } = require('http')

get('http://www.google.com', (response) => {
    response.on('data', (chunk) => {
        console.log(`Data: ${chunk}`)
    })
    response.on('end', () => {
        console.log('Data no asa')
    })
})