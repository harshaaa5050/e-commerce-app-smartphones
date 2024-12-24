import React, { useContext, useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { AdminContext } from '../../contexts/AdminContext';

const Dashboard = () => {

    const {orders} = useContext(AdminContext);
    const {products} = useContext(AdminContext);
    const {users} = useContext(AdminContext);
    const {revenue} = useContext(AdminContext);



    return (
        <>
            <AdminNavbar />
            <div className="p-6 bg-gray-100 min-h-screen pt-16">
                <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Cards for Key Metrics */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Users</h2>
                        <p className="text-3xl font-bold text-indigo-600">{users}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Products</h2>
                        <p className="text-3xl font-bold text-orange-600">{products}</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Orders</h2>
                        <p className="text-3xl font-bold text-blue-600">{orders}</p>
                    </div>
                    <div className='hidden lg:flex'></div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Revenue</h2>
                        <p className="text-3xl font-bold text-green-600">₹{revenue}</p>
                    </div>

                </div>


            </div>
        </>
    );
};

export default Dashboard;
