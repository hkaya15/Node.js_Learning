var http = require('http');
var routes=require('./routes')

var server=http.createServer(routes.handler);

server.listen(3000);