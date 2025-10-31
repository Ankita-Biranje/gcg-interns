# JWT Authentication in Node.js

JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is digitally signed using JSON Web Signature (JWS).

JWTs are commonly used for authentication and authorization in web applications.

## 1. Installation

To use JWTs in Node.js, you'll typically use the `jsonwebtoken` library.

```bash
npm install jsonwebtoken
```

## 2. Generating a JWT

To generate a JWT, you need a secret key and a payload (the data you want to store in the token). The `jsonwebtoken.sign()` method is used for this purpose.

```javascript
// generateToken.js
const jwt = require('jsonwebtoken');

const secretKey = 'your_jwt_secret_key'; // Keep this secret!

function generateToken(payload) {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
  console.log('Generated Token:', token);
  return token;
}

generateToken({ userId: '123', username: 'john.doe' });
```

## 3. Verifying a JWT

To verify a JWT, you need the token itself and the same secret key that was used to sign it. The `jsonwebtoken.verify()` method is used to check the token's validity and decode its payload.

```javascript
// verifyToken.js
const jwt = require('jsonwebtoken');

const secretKey = 'your_jwt_secret_key'; // Must be the same as used for signing

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    console.log('Decoded Token:', decoded);
    return decoded;
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return null;
  }
}

// Example usage (replace with a real token)
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJ1c2VybmFtZSI6ImpvaG4uZG9lIiwiaWF0IjoxNjcwMDAwMDAwLCJleHAiOjE2NzAwMDM2MDB9.someSignature';
verifyToken(token);
```

## 4. Authentication Middleware (Express.js Example)

In an Express.js application, you can create middleware to protect routes by verifying the JWT in the request headers.

```javascript
// authMiddleware.js
const jwt = require('jsonwebtoken');

const secretKey = 'your_jwt_secret_key';

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (token == null) return res.sendStatus(401); // No token provided

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403); // Invalid token
    req.user = user;
    next(); // Proceed to the next middleware/route handler
  });
}

module.exports = authenticateToken;
```

```javascript
// server.js (Express app using middleware)
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
```
