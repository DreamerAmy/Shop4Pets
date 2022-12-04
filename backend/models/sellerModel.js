import mongoose from 'mongoose';
import sellerSchema from "../schema/sellerSchema";
const sellerModel = mongoose.model('SellerModel', sellerSchema);
export default sellerModel;