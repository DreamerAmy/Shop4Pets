import axios from 'axios';

// const SELLER_API = 'http://localhost:4000/api/seller';
const SELLER_API = 'https://barkery-shop4pets.onrender.com/api/seller';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const ORDER_API = `${API_BASE}/order`;

export const createSeller = async (seller) => {
    const response = await axios.post(SELLER_API, seller)
    return response.data;
}

export const findSeller = async () => {
    const response = await fetch(SELLER_API)
    const seller = await response.json()
    return seller;
}

// find seller by seller id
export const findSellerById = async (sid) => {
    const seller = await axios.get(`${SELLER_API}/${sid}`)
    return seller.data[0];
}

// find a list of orders by seller id
export const findOrderBySellerId = async (sid) => {
    const order = await axios.get(`${SELLER_API}/seller/${sid}`)
    return order.data;
}

// find buyer by seller id
export const findBuyerBySellerId = async (sid) => {
    const buyer = await axios.get(`${SELLER_API}/seller/${sid}`)
    return buyer.data;
}

export const deleteSeller = async (sid) => {
    const response = await axios.delete(`${SELLER_API}/${sid}`)
    return response.data
}

export const updateSeller = async (seller) => {
    await axios.put(`${SELLER_API}/${seller._id}`, seller);
    return seller;
}