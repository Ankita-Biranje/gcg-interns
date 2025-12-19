import jwt from 'jsonwebtoken';

const secretKey = 'your_jwt_secret_key'; // Keep this secret!

function generateToken(payload) {
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
  console.log('Generated Token:', token);
  return token;
}

generateToken({ userId: '123', username: 'john.doe' });
