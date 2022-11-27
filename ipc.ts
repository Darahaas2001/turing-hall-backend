import fs from 'fs';
import { spawn } from 'child_process';
import events from 'events';

const path_a = 'pipe_a';
const path_b = 'pipe_b';
const fifo_b = spawn('mkfifo', [path_b]); // Create Pipe B
let pyIPC = new events.EventEmitter();

fifo_b.on('exit', (_stat) => {
	console.log('Created Pipe B');

	const fd = fs.openSync(path_b, 'r+');
	let fifoRs = fs.createReadStream('', { fd });
	let fifoWs = fs.createWriteStream(path_a);

	console.log('Ready to write');
	console.log('-----Sending packet-------');
	let listener = (input: string) => {
		fifoWs.write(input);
	};
	pyIPC.on('askPy', listener);

	fifoRs.on('data', (data) => {
		console.log('-----Received packet-------');
		pyIPC.emit('pyData', data.toString());
		console.log(data.toString());
		//	pyIPC.removeListener('askPy', listener);
	});
});
export default pyIPC;
