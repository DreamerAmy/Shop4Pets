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

export const findByUsername = (name) =>
    userModel.findOne({name})

export const findByEmail = (email) =>
    userModel.findOne({email})

export const findByCredentials = (email, password) =>
    userModel.findOne(
        {email, password},
        {password: false})