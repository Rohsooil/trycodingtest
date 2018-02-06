const express = require('express');
const crypto = require('crypto');
const mysql = require('mysql');
//const bodyParser = require('body-parser');
const router = express.Router();

var key = 'sssss';

const client = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'dkdidi12',
	database: 'mydb'
});

//router.use(bodyParser.urlencoded({extended: false}));

router.get('/',function(request,response){
	response.render('reg');
	response.status(200);
});

router.post('/',function(request,response){
	var user = request.body;
	client.query('SELECT count(id) AS count FROM user WHERE id = ?;',[user.userid],(error,result)=>{
		if((result[0].count == 0)&&(user.pass1 == user.pass2)&&(user.pass1!='')){
			var cipher = crypto.createCipher('aes192',key);
			var cipheredPass = cipher.update(user.userpass1,'utf8','base64');
			cipheredPass += cipher.final('base64');
			client.query('INSERT INTO user(id,name,password) VALUES(?,?,?);',[user.userid,user.username,cipheredPass],()=>{
				response.end();
			});
			response.redirect('/login');	
		}else{
			response.render('registfail');
			response.status(500);
		}
	});
});

router.get('/login',function(request,response){
	response.render('login1');
	response.status(200);
});

router.post('/login',function(request,response){
	var user = request.body;
	var cipher = crypto.createCipher('aes192',key);
	var cipheredPass = cipher.update(user.userpass1,'utf8','base64');
	cipheredPass += cipher.final('base64');
	client.query('SELECT name FROM user WHERE id = ? AND password = ? ;',[user.userid,cipheredPass],(error,result)=>{
		if(result[0] != null){
			response.render('welcome',{username: result[0].name});
			response.status(200);
		}else{
			response.render('loginfail');
			response.status(500);
		}
	});

});

module.exports = router;
