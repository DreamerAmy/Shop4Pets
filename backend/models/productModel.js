import mongoose from 'mongoose';
import productSchema from '../schema/productSchema.js';
const productModel = mongoose.model('ProductModel', productSchema);
export default productModel;