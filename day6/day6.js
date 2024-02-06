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