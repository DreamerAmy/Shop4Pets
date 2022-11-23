import buyerModel from './BuyerController';
export const findbuyer = () => buyerModel.find();
export const createBuyer = (buyer) => buyerModel.create(buyer);
export const deleteBuyer = (bid) => buyerModel.deleteOne({ _id: bid });
export const updateBuyer = (bid, buyer) => buyerModel.updateOne({ _id: bid }, { $set: buyer })