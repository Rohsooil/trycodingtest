const fs = require('fs');
const ejs = require('ejs');
const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const client = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'root',
	password: 'dkdidi12',
	database: 'mydb'
});

const app = express();
app.use(bodyParser.urlencoded({
	extended: false
}));

app.listen(65001,function(){
	console.log('Server Running....');
});

app.get('/insert',(request,response)=>{
	fs.readFile('9-insert.html','utf8',(error,data)=>{
		response.send(data);
	});
});

app.get('/members',(request,response)=>{
	fs.readFile('9-list.html','utf8',(error,data)=>{
		client.query('SELECT * FROM member',(error,results)=>{
			response.send(ejs.render(data,{
				data:results
			}));
		});
	});
});

app.post('/insert',function(request,response){
	var body = request.body;
	client.query("INSERT INTO member (name,uid,pass) VALUES (?,?,?)",[body.name,body.uid,body.pass],()=>{
		response.end();
	})
	
});
