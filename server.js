const express = require('express');
const session = require('express-session');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');
const port = 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
let cubes = {}


// Express-Session initialisieren
const sessionMiddleware = session({
  secret: 'geheimnis', // Hier können Sie einen beliebigen geheimen Schlüssel einsetzen
  resave: false,
  saveUninitialized: true
});

// Statische Dateien vom "public" Ordner bereitstellen
app.use(express.static('public'));
app.use(sessionMiddleware);

// Route für die Startseite
app.get('/', (req, res) => {
    // Generieren Sie eine Client-ID, wenn keine vorhanden ist
  const clientId = req.session.clientId || generateClientId();

  req.session.clientId = clientId;
  console.log(__dirname);

  res.sendFile(__dirname + '/public/client.html');
  console.log(__dirname);
});

// Middleware für Socket.IO, um die Express-Session zu verwenden
io.use((socket, next) => {
  sessionMiddleware(socket.request, socket.request.res, next);
});

// Eventhandler für neue Socket.IO-Verbindungen
io.on('connection', (socket) => {
  const clientId = socket.request.session.clientId;
  socket.emit('clientId', clientId);
});

//Player input
// Eventhandler für neue Socket.IO-Verbindungen
io.on('connection', function(socket) {
  const clientId = socket.request.session.clientId;
  console.log('user ' + clientId + ' connected');

  // Erstellen Sie einen neuen Cube für den verbundenen Client mit zufälligen Koordinaten
  cubes[clientId] = {
    x: Math.floor(Math.random() * 9),
    y: Math.floor(Math.random() * 11)
  };

  // Sende die Liste der Cubes an den neu verbundenen Client
  socket.emit("init", cubes);

  // Aktualisiere den Cube-Status basierend auf den Eingaben des Clients
  socket.on("update-cube", function(position) {
    // Füge die Socket-ID zur Position hinzu
    position.clientId = clientId;

    // Sende die aktualisierte Cube-Position an alle Clients
    io.emit("update-cube", position);
  });

  // Client-Verbindung trennen
  socket.on('disconnect', () => {
    console.log('user ' + clientId + ' disconnected');
    // Entferne den Cube des getrennten Clients
    delete cubes[clientId];
    // Sende eine Nachricht an alle Clients, um den Cube zu entfernen
    io.emit("update-cube", { clientId: clientId, remove: true });
  });
});

  

// Funktion zum Generieren einer zufälligen Client-ID
function generateClientId() {
  return Math.random().toString(36).substring(7);
}

// Server starten
server.listen(port, () => {
  console.log(`Server gestartet auf Port http://localhost:${port}`);
});
