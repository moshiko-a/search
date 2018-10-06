var fs = require('fs');
var path = require('path');
var flag = false;

function check(dir) {
    var files = fs.readdirSync(dir);
 
    for (var i in files) {
        var next = path.join(dir, files[i].toLowerCase()); 

        if (fs.statSync(next).isDirectory())
            check(next);
        else if (files[i].toLowerCase() == str) {
            flag = true;
            console.log(next);
        }
    }
}

if (process.argv.length != 4) {
    console.log("Usage: node search [EXT] [TXT]");
    process.exit(-1);
}
var str = process.argv[3].toString().toLowerCase() + "." + process.argv[2].toString().toLowerCase();
check(__dirname);
if (!(flag))
    console.log("No file was found");
