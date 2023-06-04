const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const PORT = 3000;
let cubes = {};

// Statische Dateien vom "public" Ordner bereitstellen
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});


// Senden Sie die Liste der Cubes an den Client
io.on('connection', function(socket) {
  console.log('user ' + socket.id + ' connected');
  
  cubes[socket.id] = {
    x: Math.floor(Math.random() * 9),
    y: Math.floor(Math.random() * 11)
  };

  // Sende die Liste der Cubes an den neu verbundenen Client
  socket.emit("init", cubes);

  // Aktualisiere den Cube-Status basierend auf den Eingaben des Clients
  socket.on("update-cube", function(position) {
    // Füge die Socket-ID zur Position hinzu
    position.socketID = socket.id;
    
    io.emit("update-cube", position);
  });

  // Client-Verbindung trennen
  socket.on('disconnect', () => {
    console.log('user ' + socket.id + ' disconnected');
    delete cubes[socket.id];
    io.emit("update-cube", { socketID: socket.id, remove: true });
  });
});

// Im Server-Code
io.on('connection', function(socket) {
  // ...
  // Behandeln Sie das "update-socket-id"-Ereignis und senden Sie die aktualisierte Socket-ID an alle verbundenen Clients
  socket.on("update-socket-id", function(newSocketId) {
    io.emit("socket-id-updated", { oldSocketId: socket.id, newSocketId: newSocketId });
    socket.id = newSocketId; // Aktualisieren Sie die Socket-ID des aktuellen Sockets
  });
});



server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
