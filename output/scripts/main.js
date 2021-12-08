const Modpack = require("./scripts/modpack/modpack");
const modpackManager = require('./scripts/modpack/modpackManager')
const {modpacks} = modpackManager


// Recreate modpacks
modpackManager.recreateModpacks()