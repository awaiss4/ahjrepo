var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	socket.on('disconnect',function(){
		console.log('a client disconnected');
	});

	socket.on('chat message', function(msg){
    	//console.log('message: ' + msg);
    	io.emit('chat message', msg);
  	});
  	console.log('a client connected');
});

http.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
                Date(Date.now() ), ipaddress, port);
});