// Problem Statement: Create an Express application with MongoDB integration using Mongoose. 
// Implement a function to establish a connection to a MongoDB database. Ensure that the connection is successful and log a success message.

const mongoose = require('mongoose');
require('dotenv').config()

function connectToMongoDB(){
    mongoose.connect(process.env.MONGO_CONNECTION_STRING).then(()=>{
        console.log('Connected')
    }).catch((err)=>{
        console.log('Error while connecting')
    })
}

connectToMongoDB();