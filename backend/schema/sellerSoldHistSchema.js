import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        sellerId: String, //sellerID:(userId) checkout pass in
        buyerId: String,
        date: String,
        productBought: String,
        productQuantity: Number,
        receiver: String,
        address: String
    },
    { collection: 'sellerSoldHist' }
);

export default schema;