const http = require('http');
const fs = require('fs');
const ejs =  require('ejs');

http.createServer(function(request,response){
	fs.readFile('7-8.ejs','utf8',function(error,data){
		response.writeHead(200,{'Content-Type':'text/html'});
		response.write('<meta charset=utf8>');
		response.end(ejs.render(data,{
			name:'ejs 실습문제',
			description:'Hello ejs With Node.js...!'
		}));
	});
}).listen(52273,function(){
	console.log('Server Running at http://127.0.0.1:52273');
});
