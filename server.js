let http = require('http');
let fs = require('fs');
let path = require('path');

//Helper function for sending 404 message
function send404(response) {
	response.writeHead(404, { 'Content-Type': 'text/plain' });
	response.write('Error 404: Resource not found.');
	response.end();
}

let server = http.createServer(function (req, res) {
	if (req.method == 'GET') {
		
		if (req.url == '/') {
			stream = fs.createReadStream("todo.html");
			stream.pipe(res);
		}

	}else if (req.method == 'PUT'){

	}
});

server.listen(3000);
console.log('server running on port 3000');




