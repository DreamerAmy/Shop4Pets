import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/userController.js";
import ProductController from "./controllers/productController.js";
import OrderController from "./controllers/orderController.js";
import dotenv from 'dotenv';
// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     serverSelectionTimeoutMS: 5000,
//     autoIndex: false, // Don't build indexes
//     maxPoolSize: 10, // Maintain up to 10 socket connections
//     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
//     family: 4 // Use IPv4, skip trying IPv6
// }

// mongoose.connect('mongodb://localhost:27017/Barkery', options);

dotenv.config();
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to db');
    })
    .catch((err) => {
        console.log(err.message);
    });

const app = express();

app.use(express.json());
app.use(cors())
UserController(app);
ProductController(app);
OrderController(app);

const port = process.env.PORT || 4000;
console.log(process.env.MONGO_URL)
app.listen(port, () => {console.log(`Node server started at port ${port}`);});