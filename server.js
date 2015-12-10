var express = require('express');
var fs      = require('fs');
var app = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/',function(req,res){
    res.send('Chat Application Coming Soon');
});

app.listen(port, ipaddress, function() {
    console.log('%s: Node server started on %s:%d ...',
                Date(Date.now() ), ipaddress, port);
});