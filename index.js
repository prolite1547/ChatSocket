var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
//   res.send('<h1>Hello world</h1>');
res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log("User is connected");
    socket.on('disconnect',function(){
        console.log("User disconnected");
    });

    // Returns the value to chat message EVENT. emitted from index.html
    socket.on('chat message',function(data){
        io.emit('chat message', data);
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});
  