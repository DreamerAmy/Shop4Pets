import axios from 'axios';
const USER_API = 'http://localhost:4000/api/user';
// const USER_API = 'https://userer-node-server-app-kjin.herokuapp.com/api/user';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const USER_API = `${API_BASE}/user`;

export const createUser = async (user) => {
    const response = await axios.post(USER_API, user)
    return response.data;
}

export const findUser = async () => {
    const response = await fetch(USER_API)
    const user = await response.json()
    return user;
}

export const findUserById = async (uid) => {
    const user = await axios.get(`${USER_API}/${uid}`)
    return user.data[0];
}

export const deleteUser = async (uid) => {
    const response = await axios.delete(`${USER_API}/${uid}`)
    return response.data
}

export const updateUser = async (user) => {
    await axios.put(`${USER_API}/${user._id}`, user);
    return user;
}


