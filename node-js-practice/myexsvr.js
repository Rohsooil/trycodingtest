const fs = require('fs');
const express = require('express');
const crypto = require('crypto');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jade = require('jade');
const app = express();

var key = 'sssss';

app.use(bodyParser.urlencoded({extended: false}));

app.get('/',function(request,response){
	fs.readFile('reg.jade','utf8',function(error,data){
		const fn = jade.compile(data);
		response.status(200);
		response.send(fn());
	});
});

app.post('/',function(request,response){
	var user = request.body;
	let userid =  request.body.userid;
	let username = request.body.username;
	let password1 = request.body.userpass1;
	let password2 = request.body.userpass2;
	
	if(password1 == password2){
		var cipher = crypto.createCipher('aes192',key);
		var cipheredPass = cipher.update(password1,'utf8','base64');
		cipheredPass += cipher.final('base64');
		let userArr = '{"name": "' + username + '","id":"' + userid + '","password1":"' + cipheredPass + '"}';
		fs.writeFile('user1.data',userArr,'utf8',function(error){});
		response.redirect('/login');
	}else{
		fs.readFile('registfail.jade','utf8',function(error,data){
			const fn = jade.compile(data);
			response.status(500);
			response.send(fn());
		});
	}
});

app.get('/login',function(request,response){
	fs.readFile('login1.jade','utf8',function(error,data){
		const fn = jade.compile(data);
		response.status(200);
		response.send(fn());
	});
});

app.post('/login',function(request,response){
	fs.readFile('user1.data','utf8',function(error,data){
		let userData = JSON.parse(data.toString());
		let userid = request.body.userid;
		let userpass1 = request.body.userpass1;
		var decipher = crypto.createDecipher('aes192',key);
		var decipheredPass = decipher.update(userData.password1,'base64','utf8');
		decipheredPass += decipher.final('utf8');
		if((userData.id == userid)&&(userpass1 == decipheredPass)){
			fs.readFile('welcome.jade','utf8',function(error,data){
				const fn = jade.compile(data);
				response.status(200);
				response.send(fn({username : userData.name }));
			});
		}else{
			fs.readFile('loginfail.jade','utf8',function(error,data){
				const fn = jade.compile(data);
				response.status(500);
				response.send(fn());
			});
		}
	});
});

app.listen(54545,function(){
	console.log("Server Running..");
});
