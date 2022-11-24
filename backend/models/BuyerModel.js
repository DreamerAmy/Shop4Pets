import mongoose from 'mongoose';
import buyerSchema from '../controllers/buyerSchema.js';
const buyerModel = mongoose.model('BuyerModel', buyerSchema);
export default buyerModel;