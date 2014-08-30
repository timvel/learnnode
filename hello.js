var http = require('http');
var myServer = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write('<strong>Hello world!</strong>');
	response.end();
});

myServer.listen(3000);
