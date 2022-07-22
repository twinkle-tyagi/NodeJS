const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Twinkle Tyagi");
});

server.listen(4000);