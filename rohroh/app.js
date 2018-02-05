var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/assets')));
app.get('/',function(req,res){
	res.render('index');
	console.log('get url /');
});
app.get('/about',(req,res)=>{
	res.render('about');
	console.log('get url /about');
});
app.listen(3000,()=>{
	console.log('server running at port 3000');
});
