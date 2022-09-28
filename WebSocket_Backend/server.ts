// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer: server
});

wsServer.on('request', (request:any)=> {
    const connection = request.accept(null, request.origin);

    connection.on('message', (message:any)=> {
      console.log('Received Message:', message.utf8Data);
      connection.sendUTF('Hi this is WebSocket server!');
    });
    connection.on('close', (reasonCode:any, description:any)=> {
        console.log('Client has disconnected.');
    });
});
