import mongoose from 'mongoose';
import userSchema from '../schema/userSchema.js';
const userModel = mongoose.model('UserModel', userSchema);
export default userModel;