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