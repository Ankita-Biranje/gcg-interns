// Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
// It allows you to run JavaScript on the server.

// To run this file, open your terminal, navigate to this directory, and run the command: node app.js

console.log("Hello, Node.js!");

// The http module is a built-in Node.js module that allows Node.js to transfer data over the HyperText Transfer Protocol (HTTP).
const http = require('http');

// The createServer() method of the http module creates an HTTP server.
const server = http.createServer((req, res) => {
    // The callback function is executed each time the server receives a request.
    // The req object represents the request from the client.
    // The res object represents the response from the server.

    res.writeHead(200, {'Content-Type': 'text/html'});
    // The writeHead() method sends a response header to the request.
    // The first argument is the status code (200 means OK).
    // The second argument is an object containing the response headers.

    res.end('<h1>Hello, World!</h1>');
    // The end() method ends the response.
});

// The listen() method of the server object makes the server listen for requests on a specified port.
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
