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
			stream = fs.createReadStream('todo.html'); 
			stream.pipe(res);
			Set
		}
		else if (req.url == '/javascript') {
			stream = fs.createReadStream('add3.js'); 
			stream.pipe(res);
		}
		//fs.createReadStream(filepath).pipe(res);
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


const io = require("socket.io")(server);

io.on ('connection', socket=> {
	
	socket.on('init' , () => {
		console.log("someone has connected"); 
		socket.emit ('load', JSON.stringify({list:Array1})); 
		
		
		
	})
	socket.on('change', list => {
		Array1 =list; 
		io.emit('newitem', JSON.stringify({list:Array1}));
	})
	
	
	
	
	
	
	
	
})