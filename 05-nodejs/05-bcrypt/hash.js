const bcrypt = require('bcrypt');

async function hashPassword(password) {
  try {
    const saltRounds = 10; // The number of rounds to use when generating the salt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed password:', hashedPassword);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

hashPassword('my-secret-password');
