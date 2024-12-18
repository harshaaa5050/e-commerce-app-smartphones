import React from 'react';
import AdminNavbar from '../../components/AdminNavbar';

const Dashboard = () => {
    return (
        <>
            <AdminNavbar />
            <div className="p-6 bg-gray-100 min-h-screen pt-16">
                <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cards for Key Metrics */}
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Orders</h2>
                        <p className="text-3xl font-bold text-blue-600">120</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Revenue</h2>
                        <p className="text-3xl font-bold text-green-600">₹5,40,075.00</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Deliveries</h2>
                        <p className="text-3xl font-bold text-purple-600">110</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Users</h2>
                        <p className="text-3xl font-bold text-indigo-600">250</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Total Products</h2>
                        <p className="text-3xl font-bold text-orange-600">75</p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-lg font-semibold">Pending Orders</h2>
                        <p className="text-3xl font-bold text-red-600">10</p>
                    </div>
                </div>

                {/* Orders Overview */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                    <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                        <table className="min-w-full text-left border-collapse">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="py-2 px-4 border">Order ID</th>
                                    <th className="py-2 px-4 border">Customer</th>
                                    <th className="py-2 px-4 border">Date</th>
                                    <th className="py-2 px-4 border">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 px-4 border">#12345</td>
                                    <td className="py-2 px-4 border">John Doe</td>
                                    <td className="py-2 px-4 border">12/15/2024</td>
                                    <td className="py-2 px-4 border text-green-600">Delivered</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 border">#12346</td>
                                    <td className="py-2 px-4 border">Jane Smith</td>
                                    <td className="py-2 px-4 border">12/14/2024</td>
                                    <td className="py-2 px-4 border text-yellow-600">Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                
            </div>
        </>
    );
};

export default Dashboard;
