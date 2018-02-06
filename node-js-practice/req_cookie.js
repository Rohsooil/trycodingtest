const http = require('http');

http.createServer((request,response)=>{
	if(request.headers.cookie){
		const cookie = request.headers.cookie.split(';').map((element)=>{
			var element = element.split('=');
			return { key: element[0], 
				value: element[1]};
		});
		response.end('<h1>'+ JSON.stringify(cookie) + '</h1>');
	}else{
		response.writeHead(200,{
			'Content-Type':'text/html',
			'Set-Cookie':['name = RintlanTta','region = Seoul']});
		response.end('<h1>쿠키를 생성함</h1>');
	}
}).listen(55553,function(){
	console.log("51515...Connection")
});
