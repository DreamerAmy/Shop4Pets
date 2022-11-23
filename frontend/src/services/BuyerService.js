import axios from 'axios';
// const BUYER_API = 'http://localhost:4000/api/buyer';
// const BUYER_API = 'https://buyerer-node-server-app-kjin.herokuapp.com/api/buyer';
const API_BASE = process.env.REACT_APP_API_BASE;
const BUYER_API = `${API_BASE}/buyer`;
console.log(BUYER_API);

export const createBuyer = async (buyer) => {
    const response = await axios.post(BUYER_API, buyer)
    return response.data;
}

export const findBuyers = async () => {
    const response = await fetch(BUYER_API)
    const buyer = await response.json()
    return buyer;
}

export const deleteBuyer = async (tid) => {
    const response = await axios.delete(`${BUYER_API}/${tid}`)
    return response.data
}

export const updateBuyer = async (buyer) => {
    await axios.put(`${BUYER_API}/${buyer._id}`, buyer);
    return buyer;
}