import mongoose from 'mongoose';
import userSchema from '../controllers/userSchema.js';
const userModel = mongoose.model('UserModel', userSchema);
export default userModel;

