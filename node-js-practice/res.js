const http = require('http');

const server = http.createServer((request,response)=>{
	response.writeHead(200,{'Content-Type':'text/html'});
	response.write('<h1>Hello Web Server with Node.js</h1>');
	response.end('<h2>This is an end of html</h2>');
});

server.listen(55555,()=>{
	console.log('Server Running at http://127.0.0.1:55555');
});
