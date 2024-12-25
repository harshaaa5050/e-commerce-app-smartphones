import React, { createContext, useEffect, useState } from 'react'
import { fetchAllProducts } from '../api/productApi';
import { fetchAllOrders } from '../api/orderApi';
import { fetchUsers } from '../api/userApi';

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {

    const [orders, setOrders] = useState(0);
    const [products, setProducts] = useState(0);
    const [users, setUsers] = useState(0);
    const [revenue, setRevenue] = useState(0);
    const [allProducts, setAllProducts] = useState([]);
    const [allOrders, setAllOrders] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        const totalProducts = async () => {
            try {
                const response = await fetchAllProducts();
                setProducts(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }
        totalProducts();

        const totalOrders = async () => {
            try {
                const response = await fetchAllOrders();
                setOrders(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }
        totalOrders();

        const totalUsers = async () => {
            try {
                const response = await fetchUsers();
                setUsers(response.data.length);
            } catch (error) {
                console.log(error);
            }
        }
        totalUsers();

        const totalRevenue = async () => {
            try {
                const response = await fetchAllOrders();
                setRevenue(response.data.reduce((total, order) => total + order.total, 0));
            } catch (error) {
                console.log(error);
            }
        }
        totalRevenue();

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


    return (
        <AdminContext.Provider value={{ orders, products, users, revenue, allProducts,setAllProducts, allOrders, allUsers }} >
            {children}
        </AdminContext.Provider>
    )

}