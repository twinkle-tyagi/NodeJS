const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

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

    res.write('<HTML>');
    res.write('<head><title> My Header </title></head>');
    res.write('<body><h1> My NodeJS project </h1></body>');
    res.write('<HTML>');

    res.end();
});

server.listen(4000);