import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        productName: String,
        description: String,
        image: String,
        images: [String],
        brand: String,
        category: String,
        price: Number,
        sellerId: String,
        unitSold: Number,
        unitInStock: Number,
        note: String,
    },
    { collection: 'product' }
);

export default schema;


