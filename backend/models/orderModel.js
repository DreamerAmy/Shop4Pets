import mongoose from 'mongoose';
import orderSchema from '../schema/orderSchema.js';
const orderModel = mongoose.model('OrderModel', orderSchema);
export default orderModel;






