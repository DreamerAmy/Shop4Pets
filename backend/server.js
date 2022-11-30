import express from 'express';
<<<<<<< Updated upstream

const app = express();

app.get('/api/products', (req, res) => {
    res.send()
});


const port = process.env.PORT || 5000;
=======
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/userController.js";
import ProductController from "./controllers/productController.js";
import OrderController from "./controllers/orderController.js";
import userRouter from './routes/userRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

// mongoose
//     .connect(process.env.MONGODB_URI)
//     .then(() => {
//         console.log('connected to db');
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/Barkery'
mongoose.connect(CONNECTION_STRING);
console.log(CONNECTION_STRING)
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/users', userRouter);




UserController(app);
ProductController(app);
OrderController(app);

const port = process.env.PORT || 4000;
console.log(process.env.MONGODB_URI)
>>>>>>> Stashed changes
app.listen(port, () => {
    console.log('serve at https://locahost:${port}');
});