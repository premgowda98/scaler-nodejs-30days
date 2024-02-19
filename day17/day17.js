// Problem Statement: Define a Mongoose schema for a "User" with properties: "username" (string) and "email" (string). Create a Mongoose model for the User schema. 
// Implement a function to add a new user to the MongoDB database.

const mongoose = require('mongoose');
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

async function addUserToDatabase(user){
    await User.create({
        username: user['name'],
        email: user['email']
    })
}

const user = {
    name: 'me',
    email: 'you'
}

addUserToDatabase(user)