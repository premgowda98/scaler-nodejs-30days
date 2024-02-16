// Problem Statement: Create a logging middleware for an Express application. The middleware should log detailed information about 
// each incoming request, including the timestamp, HTTP method, URL, request headers, and request body.


const express = require('express')
const fs = require('fs')

const app = express() ;

function requestLoggerMiddleware(req, res, next) {
    const method = req.method
    const date = new Date()

    // console.log(Object.keys(req))

    fs.writeFileSync('./day15/logs.txt', `${method} - ${date} - ${JSON.stringify(req.query)} ${JSON.stringify(req.params)} \n`, {encoding: "utf-8", flag:'a+'})
    next()
}

app.use(requestLoggerMiddleware)

app.route('/').get((req, resp)=>{
    resp.send('Recived Get Request')
}).post((req, resp)=>{
    resp.send('Recieved Post request')
})



app.listen(3000, ()=>{
    console.log('Listening at port 3000')
})