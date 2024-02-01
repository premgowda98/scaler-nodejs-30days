fs = require('fs')

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf-8', (error, result)=>{
        if (error){
            console.log('Error reading file: ENOENT: no such file or directory...')
        }else {
            console.log(result)
        }
    })
}

readFileContent('./day2.txt')
