const express = require('express');

const app = express();

app.use(function(request,response,next){
	let name = request.query.name;
	let region = request.query.region;
	const agent = request.header('User-Agent')

	console.log(request.headers);
	if(agent.toLowerCase().match(/firefox/)){
		response.status(200).send('<h2>웹브라우저:firefox<br>'+name+':' + region + '</h2>');
	}else if(agent.toLowerCase().match(/chrome/)){
		response.send('<h2>웹브라우저:Chrome <br>'+ name +':'+region + '</h2>');
	}else{
		response.status(500).send('<h2>웹브라우저:other <br>'+ name +':' + region +'</h2>')
	}
});

app.listen(52273,function(){
	console.log('Server Running ....');
});
