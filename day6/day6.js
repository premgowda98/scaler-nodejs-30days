// Problem Statement: You are building a web application using Express in Node.js. Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and returns a personalized greeting. If the name parameter is not provided, the default greeting should be "Hello, Guest!".

const express = require('express')
const app = express()

app.get('/greet', function (req, res) {
    if (req.query.name){
        res.send(`Hello ${req.query.name}`)
    } else {
        res.send('Hello Guest')
    }
})

app.listen(3563, () => {
    console.log(`Example app listening on port 3563`)
})