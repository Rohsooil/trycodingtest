const http = require('http');
const fs = require('fs');
const jade = require('jade');

http.createServer(function(request,response){
	if(request.method == 'GET'){
		if(request.url == '/'){
		 fs.readFile('reg.jade','utf8',function(error,data){
			const fn = jade.compile(data);
			response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
			response.end(fn());
		 });
		}else if(request.url.toString().includes('/login')){
		  	fs.readFile('user.data','utf8',function(error,indata){
				var reqData = request.url.toString().replace('/login?','');
				reqData = reqData.replace('userid=','').replace('userpass1=','');
				var reqArr = reqData.split('&');
				var userdata = indata.toString().split(',');
				if(reqArr[0]==userdata[1]&&reqArr[1]==userdata[2]){
					fs.readFile('welcome.jade','utf8',function(error,data){
					const fn = jade.compile(data);
					response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
					response.end(fn({username : userdata[0] }));});
				}else{
					fs.readFile('loginfail.jade','utf8',function(error,data){
					const fn = jade.compile(data);
					response.writeHead(500,{'Content-Type':'text/html;charset=utf8'});
					response.end(fn());
					});
				}
			});
		}
	}else if(request.method == 'POST'){
		if(request.url == '/'){
		  request.on('data',function(getdata){
			var ds = getdata.toString();
			ds = ds.replace("username=",'').replace("userid=",'').replace("userpass1=",'').replace("userpass2=",'');
			var dataArr = ds.split('&');
			if(dataArr[2]==dataArr[3]&&!(dataArr[0]=="")&&!(dataArr[1]=="")&&!(dataArr[2]=="")){
			  	fs.writeFile('user.data',dataArr,'utf8',function(error){});
			  	fs.readFile('login.jade','utf8',function(error,data){
		  	  		const fn = jade.compile(data);
			  		response.writeHead(200,{'Content-Type':'text/html;charset=utf8'});
			  		response.end(fn());
		  	  });
			}else{
				fs.readFile('registfail.jade','utf8',function(error,data){
					const fn = jade.compile(data);
					response.writeHead(500,{'Content-Type':'text/html;charset=utf8'});
					response.end(fn());
				});
			}
		});}
	}else{
		console.log('other case requested.....');
	}
}).listen(65003,function(){
	console.log('Server Running...');
});
