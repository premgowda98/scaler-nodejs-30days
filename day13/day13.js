// Problem Statement: Extend an existing Express application to include WebSocket support. Create a WebSocket server that echoes back any message it receives from a client. Implement an endpoint "/websocket" that serves an 
// HTML page with JavaScript to establish a WebSocket connection.

const express = require('express');
const app = express();
const { Server } = require('socket.io');
const http = require('http');
let server = http.createServer(app);

app.use(express.static('day13/public'))

const io = new Server(server);

io.on('connection', (socket)=>{
    console.log('new user connected', socket.id)

    socket.on('createMesasage', (newMessage)=>{
        console.log(newMessage)
        // socket.broadcast.emit('boardcast', `New message: ${newMessage}`); //this will send to all other users
        io.emit('boardcast', `New message: ${newMessage}`); // this will send to all users including myself
    })

    socket.on('disconnect', ()=>{
        console.log('user got disconnected', socket.id)
    })
})

app.get('/', (req, resp)=>{
    resp.send("Hello")
})

server.listen(3000, ()=>{
    console.log("Running locally at port 3000")
})