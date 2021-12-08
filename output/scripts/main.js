const fs = require('fs')
var version
var packageFile = fs.readFile("../../package.json", "utf8", function(error, data){
    if(err){
      console.log(err)
    }
    version = data
})
version = JSON.parse(version)
version = version.version
console.log(version);