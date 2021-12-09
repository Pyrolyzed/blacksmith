const Modpack = require("./scripts/modpack/modpack");
const modpackManager = require('./scripts/modpack/modpackManager')
const {modpacks} = modpackManager


// Recreate modpacks
modpackManager.recreateModpacks()

var mp = new Modpack("Test", 1, 1)

mp.createFile('testDir/testFile.txt', "Test File Contents lol")

mp.execute('testDir/testFile.txt', (data) => {
    console.log(data)
})