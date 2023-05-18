//Compatible Client: V1.0
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = 3000;
let cubes = {};
let clients = new Map();

//console.log(cubes);
//send to client
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

// Senden Sie die Liste der Cubes an den Client
io.emit("init", function(cubes){
 console.log("init" + cubes)
});

io.on("connection", function(socket) {
  // Senden Sie den aktuellen Cube-Status an den Client
  //socket.emit("init", clients);

  // Empfangen Sie den aktuellen Cube-Status vom Client
  socket.on("update-cube", function(position) {
    //clients.get(socket.id).x = position.x;
    //clients.get(socket.id).y = position.y;
    //io.emit("update-cube", clients);
  });
});


io.on("connection", function(socket) {
  // Senden Sie den aktuellen Cube-Status an den Client
  //socket.emit("init", Array.from(clients.values()));
}); 



io.on('connection', function(socket) {
  let clientID = socket.id;
    console.log('user ' + clientID + ' connected');
    clientID[socket.id];
    cubes[clientID] = {
      x: Math.floor(Math.random() * 9),
      y: Math.floor(Math.random() * 11)
    };

   console.log(cubes);
   socket.on("update-cube", function(position) {
    // Füge die Socket-ID zur Position hinzu
    position.socketID = socket.id;
    
    io.emit("update-cube", position);
  });

//disconnect
    socket.on('disconnect', () => {
      console.log('user ' + clientID + ' disconnected');

    });
  });

io.on("connection", function(socket) {
  // Empfangen Sie den aktuellen Cube-Status vom Client
  socket.on("update-cube", function(position) {
 //  console.log(position);
    io.emit("update-cube", position);
  });
});

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});



