const path = require('node:path');


function resolvePath(relativePath) {
    return  path.resolve(relativePath)
}

console.log(resolvePath('./day3/day3.js'))