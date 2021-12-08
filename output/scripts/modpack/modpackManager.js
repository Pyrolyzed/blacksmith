const path = require('path')
const fs = require('fs')
const Modpack = require('./modpack')

const modpacks = new Set()

/**
 * On application restart we need to recreate every modpack object. This does that.
 */
const recreateModpacks = function() {
    if (!fs.existsSync('modpacks')) {
        return
    }
    fs.readdir('modpacks', function(err, files) {
            if (err) {
                console.log(err)
            }
            if (files) {
                files.forEach((dir) => {
                    var detailPath = path.join('modpacks', dir, 'details.json')
                    if (fs.existsSync(detailPath)) {
                        var details = fs.readFileSync(detailPath)
                        var json = JSON.parse(details)
    
                        var name = json.name
                        var mcVersion = json.mcVersion
                        var forgeVersion = json.forgeVersion
    
                        var modpack = new Modpack(name, mcVersion, forgeVersion)
                        modpacks.add(modpack)
                    }
                }) 
            }
    })
}


module.exports = {recreateModpacks, modpacks}