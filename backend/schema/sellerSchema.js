import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        buyerId: String,
        orderId: String,
        date: String,
        totalAmount: Number,
        productBought: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
        productQuantity: [],
        creditCardName: String,
        creditCardNumber: String,
        receiver: String,
        address: String
    },
    { collection: 'seller' }
);

export default schema;