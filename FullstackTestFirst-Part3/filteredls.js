var fs = require('fs')
var ext = new RegExp('\\.('+process.argv[3]+')')
fs.readdir(process.argv[2],function(error,list){
  for (var i = 0; i < list.length; i++) {
    if (ext.test(list[i])) {
      console.log(list[i])
    }
  }
})