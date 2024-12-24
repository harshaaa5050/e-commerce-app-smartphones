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
    const [allproducts, setAllproducts] = useState([]);
    const [allorders, setAllorders] = useState([]);
    const [allusers, setAllusers] = useState([]);

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

        const allProducts = async () =>{
            try {
                const response = await fetchAllProducts();
                setAllproducts(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        allProducts();

        const allOrders = async () =>{
            try {
                const response = await fetchAllOrders();
                setAllorders(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        allOrders();

        const allUsers = async () =>{
            try {
                const response = await fetchUsers();
                setAllusers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        allUsers();

    }, []);


    return (
        <AdminContext.Provider value={{ orders, products, users, revenue, allproducts, allorders, allusers }} >
            {children}
        </AdminContext.Provider>
    )

}