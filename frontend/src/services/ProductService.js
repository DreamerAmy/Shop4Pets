import axios from 'axios';

const PRODUCT_API = 'http://localhost:4000/api/product';
// const PRODUCT_API = 'https://barkery-shop4pets.onrender.com/api/product';

// const API_BASE = process.env.REACT_APP_API_BASE;
// const PRODUCT_API = `${API_BASE}/product`;

export const createProduct = async (product) => {
    const response = await axios.post(PRODUCT_API, product)
    return response.data;
}

export const findProduct = async () => {
    const response = await fetch(`${PRODUCT_API}/all`)
    const product = await response.json()
    return product;
}

// find product by product id
export const findProductById = async (pid) => {
    const product = await axios.get(`${PRODUCT_API}/${pid}`)
    return product.data[0];
}

export const findProductBySellerId = async (sid) => {
    const seller = await axios.get(`${PRODUCT_API}/seller/${sid}`)
    return seller.data;
}


export const deleteProduct = async (pid) => {
    const response = await axios.delete(`${PRODUCT_API}/${pid}`)
    return response.data
}

export const updateProduct = async (product) => {
    await axios.put(`${PRODUCT_API}/${product._id}`, product);
    return product;
}