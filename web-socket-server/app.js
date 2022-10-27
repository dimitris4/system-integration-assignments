import { WebSocketServer } from "ws";

const server = new WebSocketServer({ host: 'localhost', port: 8090 });

server.on("connection", (socket) => {
  socket.on('onClick', () => {
    console.log('someone clicked..!');
  })
});

