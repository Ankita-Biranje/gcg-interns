import User from './UserModel.js';
import connectDB from './connect.js';

connectDB();

async function findUsers() {
  try {
    const users = await User.find({ age: { $gte: 18 } });
    console.log('Users found:', users);
  } catch (error) {
    console.error('Error finding users:', error);
  }
}

findUsers();
