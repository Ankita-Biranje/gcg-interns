import User from './UserModel.js';
import connectDB from './connect.js';

connectDB();

async function updateUser(userId, updateData) {
  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updateData, { new: true });
    console.log('User updated:', updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}

// Replace 'some-user-id' with an actual user ID from your database
// updateUser('some-user-id', { age: 31 });
