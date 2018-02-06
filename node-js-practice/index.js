const express = require('express');
const app = express();
const register = require('./routerA');
//const login = require('./routerB');
app.use('/req',register);
//app.use('/log',login);
app.listen(52273,function(){
	console.log('Server Running ...');
});
