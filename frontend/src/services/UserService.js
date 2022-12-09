import axios from 'axios';
const USER_API = 'http://localhost:4000/api/user';
const BASE_URL = 'http://localhost:4000';

// const BASE_URL = 'https://barkery-shop4pets.onrender.com';
// const USER_API = 'https://barkery-shop4pets.onrender.com/api/user';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const USER_API = `${API_BASE}/user`;

export const createUser = async (user) => {
    const response = await axios.post(USER_API, user)
    return response.data;
}

export const findUser = async () => {
    const user = await axios.get(`${USER_API}/all`)
    return user.data;
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


export const findAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    return response.data
}

export const register = async (user) => {
    const response = await axios.post(`${BASE_URL}/register`, user)
    return response.data
}

export const login = async (user) => {
    const response = await axios.post(`${BASE_URL}/login`, user)
    return response.data
}

export const profile = async () => {
    const response = await axios.post(`${BASE_URL}/profile`)
    return response.data
}

export const logout = async () => {
    const response = await axios.post(`${BASE_URL}/logout`)
    return response.data
}