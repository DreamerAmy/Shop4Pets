import sellerModel from '../models/orderModel.js';

export const findSeller = () =>
    sellerModel.find();

export const findSellerById = (sid) =>
    sellerModel.find({ _id: sid });

export const findOrderBySellerId = (sid) =>
    sellerModel.find({ orderId: sid });

export const findBuyerBySellerId = (sid) =>
    sellerModel.find({ buyerId: sid });

export const createSeller = (seller) =>
    sellerModel.create(seller);

export const deleteSeller = (sid) =>
    sellerModel.deleteOne({ _id: sid });

export const updateSeller = (sid, seller) =>
    sellerModel.updateOne({ _id: sid }, { $set: seller })