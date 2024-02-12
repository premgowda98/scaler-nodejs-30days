//Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.

const express = require('express')

const app = express() ;

function positiveIntegerHandler(req, res, next) {
    const query = req.query;
    const number = parseInt(query.number);

    if (Number.isInteger(number) && number > 0) {
        next();
    } else {
        const error = new Error('Invalid or non-positive integer');
        error.status = 400;
        next(error);
    }
}

app.use('/positive', positiveIntegerHandler)

app.get('/positive', (req, resp)=>{
    resp.send('Revied Positve Number')
})


app.listen(3000, ()=>{
    console.log('Listening at port 3000')
})