const mysql = require('mysql')

const client = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'dkdidi12',
	database: 'mydb'
});

client.query('SELECT * FROM user',(error,results)=>{
	//console.log(JSON.stringify(results));
	//results.forEach(function(item,index){
	//	console.log(item);	
	//});
	console.log(results.length);
	for(var i = 0; i<results.length;i++){
		console.log(results[i]);	
	}
});
