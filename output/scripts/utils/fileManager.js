const fs = require('fs')
const path = require('path')
const getDirName = path.dirname

function createDir(dPath) {

    if (exists(dPath)) {
        console.log(`'${dPath}' already exists!`)
        return
    }

    fs.mkdirSync(dPath, {recursive: true})
    console.log(`Directory '${dPath}' created.`)
}

function deleteDir(dPath) {

    if (!exists(dPath)) {
        console.log(`'${dPath}' doesn't exist!`)
        return
    }

    fs.rmdirSync(dPath)
    console.log(`Directory '${dpath}' deleted.`)
}

function createFile(fPath, content='') {

    if (exists(fPath)) {
        console.log(`${fPath} already exists!`)
        return
    }

    if (!exists(getDirName(fPath))) {
        fs.mkdirSync(getDirName(fPath), {recursive: true})
    }

    fs.appendFile(fPath, content, function (err) {
        if (err) throw err
        console.log(`Created file '${fPath}'`)
    })
}

function writeFile(fPath, content) {

    if (!exists(fPath)) {
        console.log(`File ${fPath} does not exist!`)
        return
    }

    fs.appendFile(fPath, content, function (err) {
        if (err) throw err
        console.log(`Wrote to file ${fPath}`)    
    })
}

function execute(fPath, toExecute=function(data){}) {

    if (!exists(fPath)) {
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

function readFile(fPath) {

    if (exists(fPath)) {
        return fs.readFileSync(fPath, 'utf-8')
    }

    return undefined
}

function exists(fPath) {
    return fs.existsSync(fPath)
}

module.exports = {exists, readFile, createFile, execute, writeFile, deleteDir, createDir}