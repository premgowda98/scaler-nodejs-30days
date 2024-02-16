// Problem Statement: Implement a caching middleware for an Express application. The middleware should cache responses 
// based on the request URL and return cached responses for subsequent identical requests. Allow cache expiration after a specified time.

const express = require('express')
const expressCache = require('cache-express')

const app = express()

function simpleDependency(){
    console.log("Check something")
}

let cahcing = expressCache({
    timeOut: 10000,
    dependsOn: () => [simpleDependency],
    onTimeout: (key, value)=>{
        console.log('Cache removed for key', key)
    }
})

app.get('/cache', cahcing, (req, resp)=>{
    resp.send("Recieved")
})

app.listen(3000, ()=>{
    console.log('Server Running at port 3000')
})