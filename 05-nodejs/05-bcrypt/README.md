# Bcrypt: Password Hashing

Bcrypt is a popular library for hashing passwords. It is designed to be slow, which makes it resistant to brute-force attacks.

## 1. Installation

To use bcrypt, you first need to install it in your project.

```bash
npm install bcrypt
```

## 2. Hashing a Password

To hash a password, you need to use the `bcrypt.hash()` method. This method takes two arguments: the password to hash and a salt.

A salt is a random string that is added to the password before it is hashed. This makes it much harder for an attacker to use a rainbow table to crack the password.

The `bcrypt.hash()` method will generate a salt for you automatically.

```javascript
// hash.js
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
```

## 3. Comparing a Password

To check if a password is correct, you need to use the `bcrypt.compare()` method. This method takes two arguments: the plain-text password and the hashed password.

```javascript
// compare.js
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
```
