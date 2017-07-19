const net = require('net');
const c = console.log;

const server =  net.createServer((socket) => {
	socket.end("Socket Emitter");
}).on('error', (err) => {
	throw err;
});

server.listen(() => {
	c(`SERVER - ${server.address().address}:${server.address().port}`);
})