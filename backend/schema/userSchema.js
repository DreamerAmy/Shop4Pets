import mongoose from 'mongoose';
const schema = mongoose.Schema(
    {
        name: {type:String, required:true},
        password: {type:String, required:true},
        accountType: {type:String, required:true, enum:['buyer', 'seller','admin']},
        email: {type:String, required:true, unique: true},
        phone: String,
        address: String,
        memberSince: String,
        favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'product' }],
    },
    { collection: 'user' }
);

export default schema;


