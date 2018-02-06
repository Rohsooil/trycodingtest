var power = 0;
var energy = 0;
const fs = require('fs');

exports.init = function(){
	power = 30;
	energy = 30;
}

exports.print = function(){
	console.log("Power : ",power);
	console.log("Energy : ",energy);
}

exports.eat = function(){
	if((energy>0)||(energy<1001)||(power>0)||(power<1001)){
		energy = energy +1;
		power = power -1;
	}else{
	}
}
exports.sleep = function(){
	if((energy>0)||(energy<1001)||(power>0)||(power<1001)){
	energy = energy-1;
	power = power -1;
	}
}
exports.exercise = function(){
	if((energy>0)||(energy<1001)||(power>0)||(power<1001)){
	energy = energy -1;
	power = power + 1;
	}
}
exports.save = function(){
	var text = 'Power : ' + power + " ,  Energy : " + energy;
	fs.writeFile('avatar.txt',text ,'utf8',function(error){});
}
