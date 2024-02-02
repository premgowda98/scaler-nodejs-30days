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