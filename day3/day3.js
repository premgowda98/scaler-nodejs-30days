// Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.

const { exec } = require('child_process');

function executeCommand(command){
    exec(command, (error, stdout, stderr)=>{
        if (error){
            // when command not found
            console.log('Wrong Command')
            return
        }
    
        if (stderr){
            // when error inside the command
            console.log(error.message)
            return
        }
        console.log(stdout)
    })

}

executeCommand('dir')