var net = require('net');

net.createServer(function (socket) {

	console.log('Socket created.');
	socket.on('data', function(data) {
	  
	  console.log('RESPONSE: ' + data);
	}).on('connect', function() {
	  
	  socket.write("GET / HTTP/1.0\r\n\r\n");
	}).on('end', function() {
	  console.log('DONE');
	});

}).listen(8080);
