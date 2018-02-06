const readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
const fs = require('fs');
const crypto = require('crypto');

var menu = ['사이트명 : ','인터넷주소 : ','아이디 : ','비밀번호 : '];
var content = ["","","",""];
var count = 0;
var text = "";
var key = "rororo";

const handlerForaLine = function(line){
	content[count] = line;
	count++;
	if(count >3){
		rl.close();
		text = content[0]+ "," + content[1]+","+content[2]+"," + content[3];
		var cipher = crypto.createCipher('aes192',key);
		var cipheredOutput = cipher.update(text,'utf8','base64');
		cipheredOutput += cipher.final('base64');
		fs.writeFile('siteinfo',cipheredOutput,'utf8',function(error){process.exit();});
	}
	else{
		rl.setPrompt(menu[count]);
		rl.prompt();
	}
}

process.argv.forEach(function(item,index){
	if(process.argv[index+2]== '-store'){
		rl.setPrompt(menu[count]);
		rl.prompt();
		rl.on('line',handlerForaLine);
	}else if(process.argv[index+2]== '-restore'){
		fs.readFile('siteinfo','utf8',function(error,readtext){
			var decipher = crypto.createDecipher('aes192',key);
			var decipheredOutput = decipher.update(readtext,'base64','utf8');
			decipheredOutput += decipher.final('utf8');
			var decArray = decipheredOutput.split(',');
			for(var i =0; i<4; i++){
				console.log(menu[i],decArray[i]);		
			}
			process.exit();
		});
	
	}
});



