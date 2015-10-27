// Quan volem instal·ar una dependecina utilitzem la funció require, es un modul
// es guarda una variable anomenada http
var http = require('http');

// en respense end el contingut ie n el head la capçalera del que mostrarem
var server = http.createServer(function (request, response) {
	console.log(request);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// i aqui el port pel que respondrem
server.listen(8888);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8888/");