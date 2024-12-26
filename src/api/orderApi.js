import axios from "axios";

const ORDER_URL = "https://e-commerce-app-smartphones-server.onrender.com/orders";

export const addNewOrder = (newOrder) => {
    return axios.post(ORDER_URL, newOrder);
}

export const fetchAllOrders = async () => {
    return axios.get(ORDER_URL);
};

export const fetchOrdersById = (id) => {
    return axios.get(`${ORDER_URL}?userId=${id}`);
}