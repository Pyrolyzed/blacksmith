const fs = require('fs')
var version
var packageFile = fs.readFileSync("package.json", { encoding: "utf-8", flag: "r" })
var version = JSON.parse(packageFile).version

document.getElementById('test').innerHTML = version;