import mongoose from 'mongoose';
import buyerSchema from '../controllers/ProfileScreen/BuyerSchema.js';
const buyerModel = mongoose.model('BuyerModel', buyerSchema);
export default buyerModel;