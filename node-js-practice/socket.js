var http = require('http');
var fs = require('fs');
var socket = require('socket.io');

var server = http.createServer(function(req,res){
    fs.readFile('HTMLPage.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(data);
    })
}).listen(52273,()=>{
    console.log('server running')
})

var io = socket.listen(server);