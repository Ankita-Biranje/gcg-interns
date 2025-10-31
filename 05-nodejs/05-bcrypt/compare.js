const bcrypt = require('bcrypt');

async function comparePassword(password, hashedPassword) {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password match:', isMatch);
    return isMatch;
  } catch (error) {
    console.error('Error comparing password:', error);
  }
}

// Replace with a real hashed password from your database
const hashedPassword = '$2b$10$yourHashedPasswordHere'; 
comparePassword('my-secret-password', hashedPassword);
