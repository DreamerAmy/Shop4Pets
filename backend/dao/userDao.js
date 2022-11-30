import userModel from '../models/userModel.js';



export const findUser = () =>
    userModel.find();

export const findUserById = (uid) =>
    userModel.find({ _id: uid });

export const createUser = (user) =>
    userModel.create(user);

export const deleteUser = (uid) =>
    userModel.deleteOne({ _id: uid });

export const updateUser = (uid, user) =>
    userModel.updateOne({ _id: uid }, { $set: user })

export const findAllUsers = () =>
    userModel.find()

export const findByUsername = (username) =>
    userModel.findOne({username})

export const findByCredentials = (username, password) =>
    userModel.findOne(
        {username, password},
        {password: false})