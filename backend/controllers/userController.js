import * as userDao from '../dao/userDao.js'
import {findByCredentials, findByEmail, findByUsername} from "../dao/userDao.js";
import * as dao from "../dao/userDao.js";


let currentUser = null
const UserController = (app) => {
    app.post('/api/user', createUser);
    app.get('/api/user/all', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);
    app.post('/register', register)
    app.post('/login', login)
    app.post('/profile', profile)
    app.post('/logout', logout)
}

const createUser = async (req, res) => {
    let newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    res.json(insertedUser);
}
const findUser = async (req, res) => {
    const user = await userDao.findUser();
    res.json(user)
}

const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers()
    res.json(users)
}

const findUserById = async (req, res) => {
    const userIdToFind = req.params.uid;
    const user = await dao.findUserById(userIdToFind);
    res.json(user)
}

const updateUser = async (req, res) => {
    const userIdToUpdate = req.params.uid;
    const updates = req.body;
    const status = await userDao.updateUser(userIdToUpdate, updates);
    res.json(status);
}

const deleteUser = async (req, res) => {
    const userIdToDelete = req.params.uid;
    const status = await userDao.deleteUser(userIdToDelete);
    res.json(status);
}

const login = async (req, res) => {
    const credentials = req.body
    const existingUser = await findByCredentials(credentials.email, credentials.password)
    if (!existingUser) {
        res.sendStatus(403)
        return;
    }
    currentUser = existingUser
    res.json(existingUser)
}

const register = async (req, res) => {
    const user = req.body
    const existingUser = await findByEmail()
    if (existingUser) {
        res.sendStatus(403)
        return;
    }
    const actualUser = await dao.createUser(user)
    currentUser = actualUser
    res.json(actualUser)
}

const profile = async (req, res) => {
    if (currentUser) {
        res.json(currentUser)
        return
    }
    res.sendStatus(403)
}

const logout = (req, res) => {
    currentUser = null
    res.sendStatus(200)
}
export default UserController