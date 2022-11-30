import express from "express";
const router = express.Router();
import User from "../models/userModel.js";
// const User = require("../models/userModel");
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import authMiddleware from "../middlewares/authMiddleware";


// const moment = require("moment");
const userRouter = express.Router();
router.post("/register", async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res
                .status(200)
                .send({ message: "User already exists", success: false });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(password, salt);
        const newuser = new User(req.body);
        await newuser.save();
        res
            .status(200)
            .send({ message: "User created successfully", success: true });
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .send({ message: "Error creating user", success: false, error });
    }
});

router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res
                .status(200)
                .send({ message: "User does not exist", success: false });
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res
                .status(200)
                .send({ message: "Password is incorrect", success: false });
        } else {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: "1d",
            });
            res
                .status(200)
                .send({ message: "Login successful", success: true, data: token });
        }
    } catch (error) {
        console.log(error);
        res
            .status(500)
            .send({ message: "Error logging in", success: false, error });
    }
});


export default userRouter;