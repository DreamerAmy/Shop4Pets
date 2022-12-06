import axios from 'axios';

const SELLER_API = 'http://localhost:4000/api/sellerhist';
// const SELLER_API = 'https://barkery-shop4pets.onrender.com/api/sellerhist';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const ORDER_API = `${API_BASE}/order`;

export const createSellerSoldHist = async (sellerHist) => {
    const response = await axios.post(SELLER_API, sellerHist)
    return response.data;
}

export const findSellerHist = async () => {
    const response = await fetch(SELLER_API)
    const sellerHist = await response.json()
    return sellerHist;
}

// find sellerHist by sellerHist id
export const findSellerHistById = async (shid) => {
    const sellerHist = await axios.get(`${SELLER_API}/${shid}`)
    return sellerHist.data[0];
}

// find seller by sellerHist id
export const findSellerHistBySellerId = async (uid) => {
    const sellerHist = await axios.get(`${SELLER_API}/seller/${uid}`)
    return sellerHist.data;
}

// find buyer by sellerHist id
export const findSellerHistByBuyerId = async (uid) => {
    const sellerHist = await axios.get(`${SELLER_API}/buyer/${uid}`)
    return sellerHist.data;
}

export const deleteSeller = async (shid) => {
    const response = await axios.delete(`${SELLER_API}/${shid}`)
    return response.data
}

export const updateSellerHist = async (sellerHist) => {
    await axios.put(`${SELLER_API}/${sellerHist._id}`, sellerHist);
    return sellerHist;
}