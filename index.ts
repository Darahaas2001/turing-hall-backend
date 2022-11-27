import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import pyIPC from './ipc';
const app = express();
//app.use(cors());
const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: ['http://hp-24g025in:3000', 'http://localhost:3000'],
		methods: ['GET', 'POST'],
		allowedHeaders: ['my-custom-header'],
		credentials: true,
	},
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.join('default');
	socket.emit('updateUserData', socket.id);
	socket.on('msg', async (data) => {
		let listener = (data: string) => {
			pyIPC.removeListener('pyData', listener);
			io.to('default').emit('botResp', data);
		};

		pyIPC.emit('askPy', data.message);
		pyIPC.on('pyData', listener);

		io.to('default').emit('updateChat', data);
	});
});

server.listen(8000, () => {
	console.log('listening on *: 8000');
});
