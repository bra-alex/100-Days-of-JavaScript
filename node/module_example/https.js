const {send} = require('./request')
const {read} = require('./response')

function request(url, data) {
    send(url, data)
    return read()
}

const response = request('https://www.google.com', 'data')
console.log(response)