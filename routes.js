const fs = require('fs'); // file system module

const requestHandlers = (req, res) => {
    
    // console.log(req.url, req.method, req.headers);
    // process.exit(); stop server inmediatamente
    
    // writes the response
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<h1>Hello from NodeJS</h1>');    
    // res.write('</html>');

    const url = req.url; // require the url from the request 
    const method = req.method; // require the method of the request

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><h1>Add Product</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');    
        res.write('</html>');
        return res.end();
    }
    
    if (url === '/message' && method === 'POST') {
        
        const body = [];
        
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
            console.log(body);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            console.log(parsedBody);
        })
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<h1>Hello from NodeJS</h1>');    
    res.write('</html>');
};

module.exports = requestHandlers;