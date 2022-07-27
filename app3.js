const http = require('http');
const routes = require('./route2.js');

//const server = http.createServer(routes);
const server = http.createServer(routes.handler);

console.log(routes.someText);

server.listen(4000);