import express from 'express';
import cors from 'cors';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";
const io = new Server(server);
import { getUsersInRoom, removeUser, addUser, markUserAsDisconnected, addUserToDatabase, getUser } from "./users.js";

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

app.post('/invite', (req, res) => {
    const userCreated = addUserToDatabase(req.body);
    console.log('user created = ', userCreated);
    if (!userCreated) {
        throw new Error('User already exists!');
    } else {
        const user = getUser(req.body.email);
        res.send({ created: true });
        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        });
    }
})

app.use(cors())

io.on("connection", (socket) => {
    socket.on('joinRequest', ({ name, room }) => {
        const socketId = socket.id;
        const { error, user } = addUser(name, room, socketId);
        if (error) return socket.emit('error', error);

        socket.join(user.room);

        io.to(user.room).emit('roomData', {
            room: user.room,
            users: getUsersInRoom(user.room)
        });
    })

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

