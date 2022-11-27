import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        productName: String,
        description: String,
        price: Number,
        sellerId: String,
        unitSold: Number,
        unitInStock: Number,
    },
    { collection: 'product' }
);

export default schema;


