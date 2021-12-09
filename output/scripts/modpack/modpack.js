const fs = require('fs')
const path = require('path')
const fm = require('../utils/fileManager')

module.exports = class Modpack {
    
    /**
     * Create the modpack, this also creates the folder inside modpacks.
     * @param {string} name 
     * @param {number} forgeVersion 
     * @param {number} mcVersion 
     * @returns A new modpack
     */
    constructor(name, forgeVersion, mcVersion) {
        this.name = name
        this.forgeVersion = forgeVersion
        this.mcVersion = mcVersion

        this.path = `modpacks/${name}`


        if (typeof name !== 'string') {
            console.log('Error! \'name\' MUST be a string!')
            return
        }

        console.log(`Creating modpack with arguments:\nName: ${name}\nForge Version: ${forgeVersion}\nMC Version: ${mcVersion}`)
     
        if (!fm.exists('modpacks')) {
            fm.createDir('modpacks', {recursive: true})
        }

        if (!fm.exists(this.path)) {
            fm.createDir(this.path, {recursive: true})
            console.log(`Modpack directory created at  '${this.path}'`)
        }

        // Create 'details.json'
        if (!fm.exists(path.join(this.path, 'details.json'))) {
            fm.createFile(path.join(this.path, 'details.json'), 
        `{\n    "name": "${name}",\n    "mcVersion": "${mcVersion}",\n    "forgeVersion": "${forgeVersion}"\n}`)
    
        }
    }

    /**
     * Delete the modpack.
     */
    delete() {
        console.log(`Deleting modpack ${this.name}`)

        if (fs.existsSync(this.path)) {
            fs.rmdirSync(this.path)
        } else {
            console.log(`${this.path} does not exist!`)
            return
        }
    }
}