import User from './UserModel.js';
import connectDB from './connect.js';

connectDB();

async function createUser(userData) {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}

createUser({ name: 'John Doe', email: 'john.doe@example.com', age: 30 });
