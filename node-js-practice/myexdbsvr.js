const fs = require('fs');
const express = require('express');
const crypto = require('crypto');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const jade = require('jade');
const app = express();

var key = 'sssss';

const client = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'dkdidi12',
	database: 'mydb'
});

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
	if(user.userpass1 == user.userpass2){
		var cipher = crypto.createCipher('aes192',key);
		var cipheredPass = cipher.update(user.userpass1,'utf8','base64');
		cipheredPass += cipher.final('base64');
		client.query('INSERT INTO user(id,name,password) VALUES(?,?,?)',[user.userid,user.username,cipheredPass],()=>{
			response.end();
		});
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
	var user = request.body;
	var cipher = crypto.createCipher('aes192',key);
	var cipheredPass = cipher.update(user.userpass1,'utf8','base64');
	cipheredPass += cipher.final('base64');
	client.query('SELECT name FROM user WHERE id = "' + user.userid + '"and password = "'+ cipheredPass + '" ;',(error,result)=>{
		if(result[0] != null){
			fs.readFile('welcome.jade','utf8',function(error,data){
				const fn = jade.compile(data);
				response.status(200);
				response.send(fn({username : result[0].name }));
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
