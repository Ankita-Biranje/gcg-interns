import User from './UserModel.js';
import connectDB from './connect.js';

connectDB();

async function deleteUser(userId) {
  try {
    const deletedUser = await User.findByIdAndDelete(userId);
    console.log('User deleted:', deletedUser);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}

// Replace 'some-user-id' with an actual user ID from your database
// deleteUser('some-user-id');
