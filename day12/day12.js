// Problem Statement: Implement a rate-limiting middleware for an Express application. The middleware should limit the number of requests from a single IP address to a specified rate, 
// and return a 429 Too Many Requests status if the limit is exceeded.

const express = require('express')
const rateLimit = require("express-rate-limit");
const app = express();

const limiter = rateLimit({
    max: 5,
    windowMs: 60 * 60 * 1000,
    message: "Too many request from this IP"
});

app.use(limiter)

app.get('/', (req, resp)=>{
    resp.send("Hello World")
})

app.listen(3000, ()=>{
    console.log("Running locally at port 3000")
})