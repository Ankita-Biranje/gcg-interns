const express = require('express');
const authenticateToken = require('./authMiddleware');

const app = express();
app.use(express.json()); // For parsing application/json

// Public route
app.get('/public', (req, res) => {
  res.send('This is a public route.');
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.send(`Welcome, ${req.user.username}! This is a protected route.`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
