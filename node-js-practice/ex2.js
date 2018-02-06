const http = require('http');
const fs = require('fs');
var count = 0;
http.createServer(function(request,response){
	if(count ==0){
		fs.readFile('shopping.html',function(error,data){
			if(error){
				response.writeHead(500,'utf8',{'Content-Type':'text/plain'});
				response.end('Server:File error');
			}else{
				console.log("page1");
				response.writeHead(200,{'Content-Type':'text/html'});
				response.end(data,()=>{count =1;});
			}
		});
	}else if(count == 1){
		console.log("page2");
		response.writeHead(200,{'Content-Type':'text/plain'});
		response.end('장바구니 목록 \n Skincare number2 \n ==================');
		count =2;
	}else if(count == 2){
		console.log("page3");
		response.writeHead(200,{'Content-Type': 'text/plain'});
		response.end('Reset counter(repeat again)');
		count = 0;
	}
}).listen(65501,()=>{
	console.log('Shopping...');
});

//const server = http.createServer(myserver);

//server.listen(65501,()=>{
//	console.log('Shopping Mall Server Running at http://127.0.0.1:65001')
//});
//server.on('request',function(code){
//	console.log('asdfasdf');
//});
