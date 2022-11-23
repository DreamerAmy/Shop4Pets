import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        name: String,
        email: String,
        phone: String,
        address: String,
        memberSince: String,
        order: Number,
        favorites: Number,
    },
    { collection: 'buyer' }
);

export default schema;