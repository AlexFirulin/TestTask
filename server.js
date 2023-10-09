const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Здесь вы можете отправить текущее время пользователю при подключении
  socket.emit('initialTime', new Date());

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(5173, () => {
  console.log('Server is running on port 5173');
});
