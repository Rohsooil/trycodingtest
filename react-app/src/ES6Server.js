import express from 'express';
import socket from 'socket.io';
const app = express();

let server = app.listen(8080, () => {
  console.log('server is running on port 8080')
});

let io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', data => {
    io.emit('RECEIVE_MESSAGE', data);
  })
});