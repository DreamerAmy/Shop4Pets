import * as userDao from '../dao/userDao.js'

const UserController = (app) => {
    app.post('/api/user', createUser);
    app.get('/api/user/all', findUser);
    app.get('/api/user/:uid', findUserById);
    app.put('/api/user/:uid', updateUser);
    app.delete('/api/user/:uid', deleteUser);
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

const findUserById = async (req, res) => {
    const userIdToFind = req.params.uid;
    const user = await userDao.findUserById(userIdToFind);
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

export default UserController