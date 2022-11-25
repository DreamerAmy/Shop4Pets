import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/userController.js";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/Barkery'
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(express.json());
app.use(cors())
UserController(app);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log('serve at https://locahost:${port}');
});