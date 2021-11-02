// declare const http
// For use module http

const http = require('http');
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
	res.writeHead(200);
	res.end("Send");
};



const server = http.createServer(requestListener);

server.listen(port, host, () =>{
	console.log(`Server is running on http://${host}:${port}`);
});