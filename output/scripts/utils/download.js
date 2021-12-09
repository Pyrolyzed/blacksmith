const http = require('http')
const fs = require('fs')
const path = require('path')
const fm = require('./fileManager')

const downloadMc = (forgeVersion, mcVersion, path) => {

}

const downloadFile = (dir, fileName, link) => {
    if (!fm.exists(dir)) {
        fm.createDir(dir)
    }

    if (!fm.exists(path.join(dir, fileName))) {
        fm.createFile(path.join(dir, fileName))
    }

    var file = fs.createWriteStream(path.join(dir, fileName))

    var request = http.get(link, function(response) {
        response.pipe(file)
    })
}

module.exports = {downloadMc, downloadFile}