import axios from "axios";

const PRODUCT_URL = "https://e-commerce-app-smartphones-server.onrender.com/products";

export const fetchAllProducts = async () => {
    return axios.get(PRODUCT_URL);
};

export const addNewProduct = (newProduct) => {
    return axios.post(PRODUCT_URL, newProduct);
}

export const fetchProductsById = async (id) => {
    return axios.get(`${PRODUCT_URL}/${id}`);
}

export const deleteProduct = async (id) => {
    await axios.delete(`${PRODUCT_URL}/${id}`);
    return await fetchAllProducts();
}

export const editProduct = async (id, updatedProduct) => {
    await axios.put(`${PRODUCT_URL}/${id}`, updatedProduct);
    return await fetchAllProducts();
}