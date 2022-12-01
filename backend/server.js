import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/userController.js";
import ProductController from "./controllers/productController.js";
import OrderController from "./controllers/orderController.js";

// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/Barkery'
const CONNECTION_STRING = 'mongodb+srv://webdev:5610@cluster0.1nuhui4.mongodb.net/Shop4Pets?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(express.json());
app.use(cors())
UserController(app);
ProductController(app);
OrderController(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {console.log(`Node server started at port ${port}`);});