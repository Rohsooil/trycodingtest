var express = require('express');
var app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
	res.render('index');
	console.log('get url /');
});
app.post('/',function(req,res){
	res.redirect('/get');
	console.log('post url /');
});
app.get('/get',(req,res)=>{
	res.send('get')
	console.log('get url /get');
});
app.listen(3000,()=>{
	console.log('server running at port 3000');
});
