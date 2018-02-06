const http = require('http');
const url = require('url');
const os = require('os');

const myserver = (request,response)=>{
	const query = url.parse(request.url,true).query;
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>'+JSON.stringify(query) + ' ' + os.platform() + '</h1>');
}

const server = http.createServer(myserver);

server.listen(56001,()=>{
	console.log('Server Running at http://120.0.1:56001');
});
