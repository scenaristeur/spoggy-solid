// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var io = require('socket.io')(server);
var port = process.env.PORT || 3000;



// Routing
app.use(express.static(__dirname + '/public'));

//Serving
server.listen(port, function () {
	console.log('Server listening at port %d', port);
});



//Socket.IO
/*
io.on('connect', function(){
	console.log("connecte");
});
io.on('event', function(data){
	console.log(data);
});
io.on('disconnect', function(){
	console.log("deconnecte");
});
*/
