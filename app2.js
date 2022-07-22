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
        fs.writeFileSync('message.text','Hello this is file');
        res.statusCode = 302;
        res.setHeader('Location','/')
        return res.end();
    }

    if(url === '/')
    {
        res.write('<HTML>');
        res.write('<head><title> My Header </title></head>');
        res.write('<body><form action = "/message" method = "POST"><input type = "text"><button type = "submit"> Send </button></form></body>');
        res.write('<HTML>');
    
        res.end();
    }
});

server.listen(4000);