const { Server } = require('y-websocket/bin/utils.js');
const http = require('http');
const express = require('express');

const app = express();


const httpServer = http.createServer(app);
httpServer.listen(9097);  // Choisissez un port

const wsServer = new Server({
  server: httpServer 
});

console.log('Serveur démarré sur http://localhost:9097');
