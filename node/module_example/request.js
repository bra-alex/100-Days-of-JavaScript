function encryptData(data){
    return 'encrypted data'
}

function send(url, data){
    const encryptedData = encryptData(data)
    console.log(`sending ${encryptedData} to ${url}`)
}

module.exports = {
    send
}