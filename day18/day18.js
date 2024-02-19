const mongoose = require('mongoose');
const express = require('express')
require('dotenv').config()

mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=>{
    console.log('Connected')
}).catch((err)=>{
    console.log('Error while connecting')
})

const user_schema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

const User = mongoose.model('userDetails', user_schema)

const app= express()

app.get('/users', (req, resp)=>{
    const all_users = getAllUsers()

    return resp.json(all_users)
})

async function getAllUsers(){
    return await User.find({})
}

app.listen(3000, ()=>{
    console/log("Server running at port 3000")
})
