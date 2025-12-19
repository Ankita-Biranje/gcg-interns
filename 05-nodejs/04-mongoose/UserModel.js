import mongoose from 'mongoose';
import UserSchema from './UserSchema.js';

const User = mongoose.model('User', UserSchema);

export default User;
