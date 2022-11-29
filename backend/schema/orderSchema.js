import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        buyerId: String,
        date: String,
        totalAmount: Number,
        productBought: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
        productQuantity: [],
        creditCardName: String,
        creditCardNumber: String,
        creditCardExpiration: String,
        creditCardSecurityCode: String,
        receiver: String,
        address: String
    },
    { collection: 'order' }
);

export default schema;