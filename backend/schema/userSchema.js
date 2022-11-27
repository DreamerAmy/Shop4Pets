import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        name: String,
        password: String,
        accountType: String,
        email: String,
        phone: String,
        address: String,
        memberSince: String,
        order: Number,
        favorites: Number,
    },
    { collection: 'user' }
);

export default schema;


