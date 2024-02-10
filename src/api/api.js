import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 13579 });

wss.on('connection', function connection(ws) {
    ws.on('error', function error(err) {
        console.error('WebSocket Error:', err);
    });

    ws.on('message', function message(data) {
        console.log('received: %s', data);
    });

    ws.send('something');
});
