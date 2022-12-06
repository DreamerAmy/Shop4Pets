import mongoose from 'mongoose';
import sellerSoldHistSchema from "../schema/sellerSoldHistSchema.js";

const sellerHistModel = mongoose.model('sellerHistModel', sellerSoldHistSchema);
export default sellerHistModel;