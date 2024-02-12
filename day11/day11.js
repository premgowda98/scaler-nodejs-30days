//Problem Statement: Implement an authentication middleware for an Express application. The middleware should check for the presence of a valid JWT (JSON Web Token) in the request headers. If a valid token is present, allow the request to proceed; otherwise, return a 401 Unauthorized status.

const express = require('express');
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken');

const app = express()

app.use(cookieParser())

app.get('/register', (req, resp)=>{
    const token = jwt.sign('hellow', 'this_is_my_secret');
    resp.cookie('jwt', token)
    resp.send('Registered')
})

app.get('/check', (req,resp)=>{
    if (req.cookies.jwt){
        try{
            jwt.verify(req.cookies.jwt, 'this_is_my_secret')
        } catch {
            resp.send('You are not authenticated')
        }
    } 
    resp.send('You are authenticated')
})

app.listen(3000, ()=>{
    console.log('Server Started')
})