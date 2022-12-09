import productModel from '../models/productModel.js';

export const findProduct = () => productModel.find();

export const findProductById = (pid) => productModel.find({ _id: pid });

export const findProductBySellerId = (uid) =>
  productModel.find({ sellerId: uid });

export const createProduct = (product) => productModel.create(product);

export const deleteProduct = (pid) => productModel.deleteOne({ _id: pid });

export const updateProduct = (pid, product) =>
  productModel.updateOne({ _id: pid }, { $set: product });

export const searchProduct = (queryFilter) => productModel.find(queryFilter);
