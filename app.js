const http = require('http');
const routes = require('./route'); // to import route.js file, we are importing local file so we add ./ to search locally. we do not need to add .js after route it will take automatically.

const server1 = http.createServer(routes); // to execute routes.

 server1.listen(3000);