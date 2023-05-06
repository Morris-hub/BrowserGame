const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = 4000;

let cubes = {};

//send to client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

// Senden Sie die Liste der Cubes an den Client
io.emit("init", cubes);


//check connection
io.on('connection', (socket) => {
  //console.log('a user connected');
});


io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });


io.on("connection", function(socket) {
  console.log("Ein neuer Client hat eine Verbindung hergestellt!");

  // Empfangen Sie den aktuellen Cube-Status vom Client
  socket.on("update-cube", function(position) {
    // Senden Sie den aktualisierten Cube-Status an alle verbundenen Clients
    io.emit("update-cube", position);
  });
});


server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});



