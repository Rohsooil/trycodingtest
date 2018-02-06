const http = require('http');
const fs = require('fs');
const jade = require('jade');

http.createServer(function(request,response){
	if(request.method == 'GET'){
		if(request.url == '/'){
			fs.readFile('hello.jade','utf8',function(error,data){
				const fn = jade.compile(data);
				response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
				response.end(fn());
			});
		}
	}
}).listen(52273,function(){
	console.log('Server Running');
});
