import React, { useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { fetchAllOrders } from '../../api/orderApi';

const ViewOrders = () => {

  const [orders, setOrders] = useState([]);
      
        useEffect(() => {
          const getOrders = async () => {
            try {
              const response = await fetchAllOrders();
              setOrders(response.data);
            } catch (error) {
              console.log(error);
            }
          }
          getOrders();
        },[]);

  return (
    <>
      <AdminNavbar/>
      <div className="p-6 bg-gray-100 min-h-screen pt-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 pt-10">Manage Orders</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search orders..."
              className="p-2 border rounded-md w-full md:w-1/2"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="table-auto w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="border-t">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.username}</td>
                    <td className="p-3">₹{order.total}</td>
                    <td className="p-3">{order.orderStatus}</td>
                    <td className="p-3">
                      <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewOrders;
