const express = require('express');
const router = express.Router();

router.use(function timeLog(req,res,next){
	console.log('Time: ',Date.now());
	next();
});

router.get('/',function(req,res){
	console.log('router.get() invoked!');
	res.send('routerA/ home page');
});

router.get('/about',function(req,res){
	console.log('router.get() invoked!');
	res.send('router/about home page');
});

module.exports = router;
