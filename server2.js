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
			stream = fs.createReadStream('todo2.html'); 
			stream.pipe(res);
		}
		else if (req.url == '/javascript') {
			stream = fs.createReadStream('add2.js'); 
			stream.pipe(res);
		}
		else if (req.url == '/array') {
			res.writeHead(200, { 'content-type': "text/plain" });
			res.write(JSON.stringify({A:Array1})); 
			res.end();
		}
		//fs.createReadStream(filepath).pipe(res);
	}
	else if (req.method == "PUT" && req.url == '/change') {
			let body = ""
			req.on('data', (chunk) => {
			body += chunk;
			})
			req.on('end', () => {
			Array1 = JSON.parse(body).L;
			res.writeHead(200, { 'content-type': "text/plain" });
			res.end();
			})
		}
	else{ //if not a GET request, send 404 for now by default
		send404(res);
	}
});

server.listen(3000);
console.log('server running on port 3000');


let size = 0 ;
let spliceCount; 
let html;
let colorarr = [false,false,false]; 
let Array1 = ["a","b","c"]; 




