const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    res.setHeader('Content-Type','text/html');

    if(url === '/home')
    {
        res.write('<HTML>');
        res.write('<head><title> Welcome home </title></head>');
        res.write('<body><h1> My NodeJS project </h1></body>');
        res.write('<HTML>');

        return res.end();
    }

    if(url === '/about')
    {
        res.write('<HTML>');
        res.write('<head><title> Welcome to About Us page </title></head>');
        res.write('<body><h1> My NodeJS project </h1></body>');
        res.write('<HTML>');

        return res.end();
    }

    if(url === '/node')
    {
        res.write('<HTML>');
        res.write('<head><title> My Header </title></head>');
        res.write('<body><h1> Welcome to my Node Js project </h1></body>');
        res.write('<HTML>');

        return res.end();
    }

    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const bufferBody = Buffer.concat(body).toString();
            const message = bufferBody.split('=')[1];
            fs.writeFileSync('message1.txt', message);
        });
    
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
    }

    if(url === '/')
    {
        const reading = fs.readFileSync('./message1.txt'); // to read from file message.txt

        res.write('<HTML>');
        res.write('<head><title> My Header </title></head>');
        res.write(`<body> ${reading} <form action = "/message" id = "my-form" method = "POST"> <ul id = "my-list"> </ul> <input type = "text" name = "message"><button type = "submit"> Send </button></form></body>`);
        // writing data read from file to body.
        res.write('<HTML>');
    
        return res.end();
    }

});

server.listen(4000);