import React, { createContext, useEffect, useState } from 'react'
import { fetchAllProducts } from '../api/productApi';
import { fetchAllOrders } from '../api/orderApi';
import { fetchUsers } from '../api/userApi';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [allOrders, setAllOrders] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {

        const fetchProducts = async () =>{
            try {
                const response = await fetchAllProducts();
                setAllProducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducts();

        const fetchOrders = async () =>{
            try {
                const response = await fetchAllOrders();
                setAllOrders(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchOrders();

        const fetchAllUsers = async () =>{
            try {
                const response = await fetchUsers();
                setAllUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllUsers();

    }, []);

    const totalProducts = async () => {
        try {
            const {data: users} = await fetchAllProducts();
            return users.length;
        } catch (error) {
            console.log(error);
        }
    }

    const totalOrders = async () => {
        try {
            const {data: orders} = await fetchAllOrders();
            return orders.length;
        } catch (error) {
            console.log(error);
        }
    }

    const totalUsers = async () => {
        try {
            const {data: users} = await fetchUsers();
            return users.length;
        } catch (error) {
            console.log(error);
        }
    }

    const totalRevenue = async () => {
        try {
            const {data: orders} = await fetchAllOrders();
            return orders.reduce((total, order) => total + order.total, 0);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <AdminContext.Provider value={{totalProducts, totalOrders, totalUsers, totalRevenue, allProducts,setAllProducts, allOrders, allUsers }} >
            {children}
        </AdminContext.Provider>
    )

}