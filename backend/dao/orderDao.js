import orderModel from '../models/orderModel.js';
export const findOrder = () =>
    orderModel.find();

export const findOrderById = (oid) =>
    orderModel.find({ _id: oid });

export const findOrderByBuyerId = (uid) =>
    orderModel.find({ buyerId: uid });

export const createOrder = (order) =>
    orderModel.create(order);

export const deleteOrder = (oid) =>
    orderModel.deleteOne({ _id: oid });

export const updateOrder = (oid, order) =>
    orderModel.updateOne({ _id: oid }, { $set: order })