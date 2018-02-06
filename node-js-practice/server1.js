const http = require('http');

const server = http.createServer();

server.on('connection',function(code){
	console.log('Connection On');
});

server.on('request',function(code){
	console.log('Request On');
});

server.on('close',function(code){
	console.log('Close On');
});

server.listen(55555,function(){
	console.log('Server 실행(55555)...');
});

setTimeout(()=>{server.close();},2000);
