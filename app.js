var net = require('net');

net.createServer(function (socket) {

	console.log('Socket created.');
	socket.on('data', function(data) {
	
		socket.write("HTTP/1.1 200 OK\n\n");
		socket.end();
	})
	  
}).listen(6719);
