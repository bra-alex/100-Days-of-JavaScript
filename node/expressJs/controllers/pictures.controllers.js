const path = require('path')

function getImages(req, res) {
    const pathDir = path.join(__dirname, '..', 'public', 'media', 'skimountain.jpg')
    res.sendFile(pathDir)
}

module.exports = {
    getImages
}