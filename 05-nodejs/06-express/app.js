import express from 'express';
const app = express();
const port = 3000;

// Middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date()}`);
  next(); // Call the next middleware function
};

// Use the logger middleware for all requests
app.use(logger);

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route for the /about URL
app.get('/about', (req, res) => {
  res.send('About Page');
});

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
