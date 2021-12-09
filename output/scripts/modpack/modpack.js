const fs = require('fs')
const path = require('path')
const getDirName = path.dirname

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
     
        if (!fs.existsSync('modpacks')) {
            fs.mkdirSync('modpacks', {recursive: true})
        }

        if (!fs.existsSync(this.path)) {
            fs.mkdirSync(this.path, {recursive: true})
            console.log(`Modpack directory created at  '${this.path}'`)
        }

        // Create 'details.json'
        if (!fs.existsSync(path.join(this.path, 'details.json'))) {
            this.createFile('details.json', 
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
    /**
     * Create a directory relative to the modpack folder
     * @param {string} dPath This is the path relative to the modpack folder 
     */
    createDir(dPath) {
        dPath = path.join(this.path, dPath)

        if (fs.existsSync(dPath)) {
            console.log(`'${dPath}' already exists!`)
            return
        }

        fs.mkdirSync(dPath, {recursive: true})
        console.log(`Directory '${dPath}' created.`)
    }

    /**
     * Delete a directory relative to the modpack folder
     * @param {string} dPath This is the path relative to the modpack folder
     */
    deleteDir(dPath) {
        dPath = path.join(this.path, dPath)

        if (!fs.existsSync(dPath)) {
            console.log(`'${dPath}' doesn't exist!`)
            return
        }

        fs.rmdirSync(dPath)
        console.log(`Directory '${dpath}' deleted.`)
    }

    /**
     * Create a file and write content to it.
     * @param {string} fPath 
     * @param {?} content 
     * @returns 
     */

    createFile(fPath, content=undefined) {
        fPath = path.join(this.path, fPath)

        if (fs.existsSync(fPath)) {
            console.log(`${fPath} already exists!`)
            return
        }

        if (!fs.existsSync(getDirName(fPath))) {
            fs.mkdirSync(getDirName(fPath), {recursive: true})
        }

        fs.appendFile(fPath, content, function (err) {
            if (err) throw err
            console.log(`Created file '${fPath}'`)
        })
    }

    /**
     * Write to a existing file
     * @param {string} fPath 
     * @param {?} content 
     */
    writeFile(fPath, content) {
        fPath = path.join(this.path, fPath)

        if (!fs.existsSync(fPath)) {
            console.log(`File ${fPath} does not exist!`)
            return
        }

        fs.appendFile(fPath, content, function (err) {
            if (err) throw err
            console.log(`Wrote to file ${fPath}`)    
        })
    }

    /**
     * Read a file and execute something on it
     */
    execute(fPath, toExecute=function(data){}) {
        fPath = path.join(this.path, fPath)

        if (!fs.existsSync(fPath)) {
            console.log(`File ${fPath} does not exist!`)
            return
        }

        fs.readFile(fPath, 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            toExecute(data)
        })
    }

    /**
     * Read a file and return it's contents
     */
    readFile(fPath) {
        fPath = path.join(this.path, fPath)

        var data = fs.readFileSync(fPath, 'utf-8')

        return data
    }
}