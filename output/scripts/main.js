const Modpack = require("./scripts/modpack/modpack");

var modpack = new Modpack("Test Modpack", 1, 1)

modpack.createDir('TestDir')

modpack.createFile('TestDir/test.txt', "Test Data")

modpack.executeFile('TestDir/test.txt', (data) => {
    console.log("Testing:" + data)
})

var content = modpack.readFile('TestDir/test.txt')

console.log(content)