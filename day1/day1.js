// Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. The function should print the content to the console.

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
