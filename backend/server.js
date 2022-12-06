import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/userController.js";
import ProductController from "./controllers/productController.js";
import OrderController from "./controllers/orderController.js";
import SellerController from "./controllers/sellerController.js";
import SessionController from "./controllers/sessionController.js";
import session from "express-session";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/Barkery'
const CONNECTION_STRING = 'mongodb+srv://webdev:5610@cluster0.1nuhui4.mongodb.net/Shop4Pets?retryWrites=true&w=majority'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect(CONNECTION_STRING, options);
const app = express();
app.use(cors())
app.use(session({
    secret: 'shop4pets',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json());
UserController(app);
ProductController(app);
OrderController(app);
SellerController(app);
SessionController(app)
const port = process.env.PORT || 4000;
app.listen(port, () => {console.log(`Node server started at port ${port}`);});
