import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
            //sellerSoldHistId: selling hist
        sellerId: [{type:mongoose.Schema.Types.ObjectId, ref: "sellerId"}], //sellerID:(userId) checkout pass in
        buyerId: String,
        date: String,
        productBought: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
        productQuantity: [],
        receiver: String,
        address: String
    },
    { collection: 'sellerSoldHist' }
);

export default schema;