import sellerHistModel from "../models/sellerHistModel.js";

export const findSellerHist = () =>
    sellerHistModel.find();

export const findSellerHistById = (shid) =>
    sellerHistModel.find({ _id: shid });

export const findSellerHistBySellerId = (uid) =>
    sellerHistModel.find({ sellerId: uid });

export const findSellerHistByBuyerId = (uid) =>
    sellerHistModel.find({ buyerId: uid });

export const createSellerSoldHist = (sellerHist) =>
    sellerHistModel.create(sellerHist);

export const deleteSeller = (shid) =>
    sellerHistModel.deleteOne({ _id: shid });

export const updateSeller = (shid, sellerHist) =>
    sellerHistModel.updateOne({ _id: shid }, { $set: sellerHist })