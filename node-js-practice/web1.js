const http = require('http');

const myserver = (request,response)=>{
	response.writeHead(200,{'Content-Type':'text/html'});
	response.end('<h1>Oh My God!</h1><br><h1>========</h1>');
}

const server = http.createServer(myserver);
server.listen(56008,function(){
	console.log('Server Waiting.. 56008...');
});
server.on('connection',function(code){
	console.log('웹브라우저에서 나에게 connect 요청을 해왔습니다.!')
});
//server.listen(56008,function(){
//	console.log('Server Waiting.. 56008...');
//});
server.on('request',function(code){
	console.log('request 이벤트가 발생되었습니다.')
});

//server.listen(56008,function(){
//	console.log('Server Waiting.. 56008...');
//});

