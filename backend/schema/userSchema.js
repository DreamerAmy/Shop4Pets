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
        favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    },
    { collection: 'user' }
);

export default schema;


