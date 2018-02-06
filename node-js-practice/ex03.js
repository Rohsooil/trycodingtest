const http = require('http');
const fs = require('fs');

http.createServer((request,response)=>{
	if(request.method == 'GET'){
		if(request.url=='/list'){
		 fs.readFile('shopping.html',(error,file)=>{
			if(error){
				response.writeHead(500,'utf8',{'Content-type':'text/plain'});
				response.end('Server:File error');
			}else{
				response.writeHead(200,{'Content-type':'text/html'});
				response.end(file);
			}
		});

		}else if(request.url=='/cart'){
			response.writeHead(200,{'Content-type':'text/plain'});
			response.end('장바구니 목록 \n Skincare number2 \n============');
		}else if(request.url=='/under'){
			response.writeHead(200,{'Contenn-type':'text/plain'});
			response.end('공사중....');
		}
	}
}).listen(65011,()=>{
	console.log('Server Runnig (65011)...');
});
