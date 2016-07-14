var fs = require('fs')

var file = fs.readFileSync(process.argv[2]).toString()
console.log(file.match(/\n/g).length)