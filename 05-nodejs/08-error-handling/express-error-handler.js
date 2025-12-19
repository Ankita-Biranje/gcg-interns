import express from 'express';
const app = express();

app.get('/', (req, res, next) => {
  // Simulate an error
  if (Math.random() > 0.5) {
    next(new Error('Something went wrong on the main route!'));
  } else {
    res.send('Welcome!');
  }
});

app.get('/broken', (req, res, next) => {
  // Simulate an error that might not be caught by a try-catch in an async handler
  throw new Error('This is a synchronous error on /broken');
});

// Error handling middleware (must have 4 arguments: err, req, res, next)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log the error stack for debugging
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
