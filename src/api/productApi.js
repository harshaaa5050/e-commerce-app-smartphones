import axios from "axios";

const PRODUCT_URL = "http://localhost:5000/products";

export const fetchAllProducts = async () => {
    return axios.get(PRODUCT_URL);
};

export const addNewProduct = (newProduct) => {
    return axios.post(PRODUCT_URL, newProduct);
}

export const fetchProductsById = async (id) => {
    return axios.get(`${PRODUCT_URL}/${id}`);
}