import axios from "axios";

const ORDER_URL = "http://localhost:5000/orders";

export const addNewOrder = (newOrder) => {
    return axios.post(ORDER_URL, newOrder);
}

export const fetchOrdersById = (id) => {
    return axios.get(`${ORDER_URL}?userId=${id}`);
}