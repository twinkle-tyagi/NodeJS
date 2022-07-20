// We need to make and then export this module.
// two ways to export a module, given at last.

const fs = require('fs'); // to import file system module

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/')
    {
        res.write('<html>');
        res.write('<head> <title> Enter messasge </title> </head>');
        res.write('<body> <form action = "/message" method = "POST"> <input type = "text" name = "msg"> <button type ="submit"> Send </button> </form> </body>');
        // action will target the page it is send to here localhost, method to be used is POST to send request.
        // GET is automatically generated when we enter url or click on link, POST has to be set up by us.
        // form not only send our request but also looks into the form and detect any inputs, and automatically puts that input into the reuest we send
        res.write('</html>');
    
        return res.end(); 
        // we write return so that it will return from here and will not execute the code ahead. 
        // there should not be any other res.write or res.end after res.end, so writing written helps.
    }

    if(url === '/message' && method === 'POST')
    {
        const body = []; // create an array body to save chunks of data
        // To fetch data input by user from text field and save it to message.txt
        // 1. add an event listener.
        // 2. Data is in form of stream of data. to interact with it we need to create a buffer.
        // 3. write it to the file.

        //1.  req.on('data', function) register event listener on data, function contains work that we need to do on chunks of data that event returns. 
        req.on('data', (chunksOfData) => {  // registers an event listener. data event will be fired whenever a new chunk is ready to be read.
            //console.log(chunksOfData); // will return hexadecimal representation of chunks
            body.push(chunksOfData); //push data in array.
        }); 
        
        //2. req.on('end', function) registers eventListener which will be fired when its done parsing incoming request data
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString(); // create a buffer adds all the chunks from body to it, call tostring() to convert it to string.
            //console.log(parseBody);
            const msgs = parseBody.split('=')[1]; // split content of parseBody on the basis of = and take ssecond element, that would be data on the right of =

            // 3. write to file
            fs.writeFileSync('message.txt', msgs); // as JS waits for none we write in file here.
            //writefileSync sync stands for synchronous, this will hold the code till this txt file is created.
            //we block execution till file is created.
            
            res.statusCode = 302; //status code for redirection.
            res.setHeader('Location', '/'); // to set header. location is set to / (This is one of default header accepted by browser)
    
            return res.end(); // return so that it will not execute furthur lines.
    
        });

       // fs.writeFileSync('message.txt', 'This is message One'); // to write to file message.txt.

        // these two lines are used to redirect our page to / url
    }
    res.setHeader('Content-Type','text/html'); 
    
    res.write('<html>');
    res.write('<head> <title> My first response </title> </head>');
    res.write('<body> <h1> Hello from my NodeJS server </h1> </body>');
    res.write('</html>');
    
    res.end(); 
}

// 1. export a file
module.exports = requestHandler // module is a keyword exposed globally to you by nodeJs, which has exports property. and we assign it a value that is our const function.

//2. export as object.
/*
module.exports = {
    handler: requestHandler,
    someText: 'This is some hard coded text'
}
*/

// to use as object we have to use like routes.handler, routes.someText in app.js file

// 3. exports.handler = requestHandler;  // you can simply omit module.