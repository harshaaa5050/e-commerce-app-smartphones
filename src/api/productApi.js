import axios from "axios";

const PRODUCT_URL = "http://localhost:5000/products";

export const fetchAllProducts = async () => {
    return axios.get(PRODUCT_URL);
};

export const fetchProductsById = async (id) => {
    return axios.get(`${PRODUCT_URL}/${id}`);
}