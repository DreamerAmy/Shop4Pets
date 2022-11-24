import buyerModel from '../models/buyerModel.js';
export const findBuyer = () =>
    buyerModel.find();

export const findBuyerById = (bid) =>
    buyerModel.find({ _id: bid });

export const createBuyer = (buyer) =>
    buyerModel.create(buyer);

export const deleteBuyer = (bid) =>
    buyerModel.deleteOne({ _id: bid });

export const updateBuyer = (bid, buyer) =>
    buyerModel.updateOne({ _id: bid }, { $set: buyer })