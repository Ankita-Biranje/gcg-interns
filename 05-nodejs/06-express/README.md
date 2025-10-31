# Express.js: A Minimalist Web Framework

Express is a fast, unopinionated, minimalist web framework for Node.js. It provides a robust set of features for web and mobile applications.

## 1. Installation

To use Express, you first need to install it in your project.

```bash
npm install express
```

## 2. Basic Server Setup

A basic Express application can be set up with just a few lines of code. This example creates a simple web server that listens on port 3000 and responds with "Hello World!" for all incoming requests.

```javascript
// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

## 3. Routing

Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

```javascript
// app.js (continued)

// Respond to POST request on the root route (/), the application’s home page
app.post('/', (req, res) => {
  res.send('Got a POST request');
});

// Respond to a PUT request to the /user route
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user');
});

// Respond to a DELETE request to the /user route
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user');
});
```

## 4. Middleware

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Middleware functions can perform the following tasks:

- Execute any code.
- Make changes to the request and the response objects.
- End the request-response cycle.
- Call the next middleware in the stack.

```javascript
// app.js (continued)

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date()}`);
  next(); // Call the next middleware function
};

app.use(logger); // Use the logger middleware for all requests

app.get('/about', (req, res) => {
  res.send('About Page');
});
```
