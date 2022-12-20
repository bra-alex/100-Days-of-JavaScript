const fs = require('fs')

module.exports = function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            throw new Error(err)
        }
    })
}