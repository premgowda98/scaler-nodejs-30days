//Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method of every incoming request to the server.

const express = require('express')
const fs = require('fs')

const app = express() ;

function requestLoggerMiddleware(req, res, next) {
    const method = req.method
    const date = new Date()

    fs.writeFileSync('./day7/logs.txt', `${method} - ${date}\n`, {encoding: "utf-8", flag:'a+'})
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