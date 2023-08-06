var http = require('http');
var routes = require('./routes');

var server = http.createServer(routes)


server.listen(3000)