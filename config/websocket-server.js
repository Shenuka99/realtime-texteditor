// config/websocket-server.js
const WebSocket = require('ws');
const http = require('http');
const app = require('../app'); // Import the Express app

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Create a WebSocket server instance
const wss = new WebSocket.Server({ server });

// Handle connection events
wss.on('connection', (ws) => {
  console.log('Client connected');

  // Handle incoming messages from clients
  ws.on('message', (message) => {
    console.log(`Received message => ${message}`);
    // Send a response to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle disconnection events
  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Export the server
module.exports = server;
