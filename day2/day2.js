// Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user input content as input. The function should write the content to the specified file using the fs module.

const fs = require('fs')

function writeToFile(filePath, content) {
    try{
        fs.writeFileSync(filePath, content, {encoding: "utf-8"})
        console.log('Written to file')
    } catch {
        console.log(`Path ${filePath} not found`)
    }
}

writeToFile('./day5/output.txt', "Hello World")
writeToFile('./day2/output.txt', "Hello World")