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