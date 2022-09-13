import express from 'express';
import cors from 'cors';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
import { getUsersInRoom, removeUser, addUser, markUserAsDisconnected } from "./users.js";

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.use(cors())

io.on("connection", (socket) => {
    socket.on('joinRequest', ({ name, room }) => {
        const socketId = socket.id;
        const { error, user } = addUser(name, room, socketId);
        if (error) return socket.emit('error', error);

        // Emit will send message to the user
        // who had joined
        // socket.emit('message', { user: 'admin', text:
        //     `${user.name},
        //     welcome to room ${user.room}.` });

        // Broadcast will send message to everyone
        // in the room except the joined user
        // socket.broadcast.to(user.room)
        //     .emit('message', { user: "admin",
        //     text: `${user.name}, has joined` });

        socket.join(user.room);

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        });

        // callback();
    })

    // socket.on('sendMessage', (message, callback) => {

    //     const user = getUser(socket.id);
    //     io.to(user.room).emit('message',
    //         { user: user.name, text: message });

    //     io.to(user.room).emit('roomData', {
    //         room: user.room,
    //         users: getUsersInRoom(user.room)
    //     });
    //     callback();
    // })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
        if (user) {
            markUserAsDisconnected(socket.id);
            io.to(user.room).emit('roomData', {
                room: user.room,
                users: getUsersInRoom(user.room)
            });
        }
    })
})

server.listen(8080, () => {
    console.log('server is running on port 8080');
})

