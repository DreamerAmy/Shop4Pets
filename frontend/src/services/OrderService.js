import axios from 'axios';
const ORDER_API = 'http://localhost:4000/api/order';
// const ORDER_API = 'https://orderer-node-server-app-kjin.herokuapp.com/api/order';
// const API_BASE = process.env.REACT_APP_API_BASE;
// const ORDER_API = `${API_BASE}/order`;

export const createOrder = async (order) => {
    const response = await axios.post(ORDER_API, order)
    return response.data;
}

export const findOrder = async () => {
    const response = await fetch(ORDER_API)
    const order = await response.json()
    return order;
}

// find order by order id
export const findOrderById = async (oid) => {
    const order = await axios.get(`${ORDER_API}/${oid}`)
    return order.data[0];
}

// find a list of orders by buyer id
export const findOrderByBuyerId = async (uid) => {
    const order = await axios.get(`${ORDER_API}/buyer/${uid}`)
    console.log(order.data);
    return order.data;
}

export const deleteOrder = async (oid) => {
    const response = await axios.delete(`${ORDER_API}/${oid}`)
    return response.data
}

export const updateOrder = async (order) => {
    await axios.put(`${ORDER_API}/${order._id}`, order);
    return order;
}