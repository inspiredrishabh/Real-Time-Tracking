const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const socketio =  require('socket.io');
const server = http.createServer(app);
const io = socketio(server);

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));


io.on("connection",(socket)=>{
    socket.on('sendLocation',(data)=>{
        io.emit('receiveLocation',{id: socket.id, ...data});
    });
    socket.on("disconnect",()=>{
        io.emit("userDisconnected", {id: socket.id});
    });
});

app.get('/',(req,res)=>{
    res.render('index');
})
server.listen(3000);