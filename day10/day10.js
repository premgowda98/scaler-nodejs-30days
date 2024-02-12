//Problem Statement:  Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory. Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

const express = require('express')
const path = require('path');

const app = express() ;
app.use(express.static('day10/public'))


app.get('/', function(req, res) {
    res.send("Hello");
});

app.listen(3000, ()=>{
    console.log('Listening at port 3000')
})