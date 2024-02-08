// Problem Statement: Create a function resolvePath(relativePath) that takes a relative path as input and resolves it to an absolute path using the path module. The function should print the resolved path to the console.

const path = require('node:path');


function resolvePath(relativePath) {
    return  path.resolve(relativePath)
}

console.log(resolvePath('./day3/day3.js'))