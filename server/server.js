const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app!',
        createdAt: Date.now()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: Date.now()
    });

    socket.on('createMessage', (message) => {
        console.log('New user connected');

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: Date.now()
        });
    });

    socket.on('disconnect', () => console.log('User disconnected'));
});

server.listen(port, () => {
    console.log(`Server started on port ${port}`)
});