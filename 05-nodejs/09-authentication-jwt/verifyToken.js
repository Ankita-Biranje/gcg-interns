import jwt from 'jsonwebtoken';

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
