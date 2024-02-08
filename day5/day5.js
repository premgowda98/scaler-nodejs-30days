// Problem Statement: Create a function checkFileExtension(filePath, expectedExtension) that takes a file path and an expected file extension as input. The function should check if the file has the expected extension using the path module and print the result to the console.

const path = require('node:path');

function checkFileExtension(filePath, expectedExtension) {
    const extension = path.extname(filePath)

    if (extension === expectedExtension){
        console.log(`File has the expected extension: ${expectedExtension}`)
    } else {
        console.log(`File does not have the expected extension: ${expectedExtension}`)
    }
}

checkFileExtension(__filename, '.js')