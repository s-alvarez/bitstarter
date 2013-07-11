var express = require('express');

var fs = require('fs');
var index_fl = fs.readFileSync('index.html','utf8');

//var buf = new Buffer(128);
//buf.write(index_fl);

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  //response.send(buf.tostring('utf-8',0,Buffer.length));
  response.send(index_fl);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});