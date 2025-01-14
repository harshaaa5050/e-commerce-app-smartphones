import React, { useContext, useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { AdminContext } from '../../contexts/AdminContext';

const ViewOrders = () => {

  const {allOrders} = useContext(AdminContext);

  return (
    <>
      <AdminNavbar />
      <div className="p-6 bg-gray-100 min-h-screen pt-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-6 pt-10">Orders</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search orders..."
              className="p-2 border rounded-md w-full md:w-1/2"
            />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="table-auto w-full border-collapse text-center">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="p-3">Order ID</th>
                  <th className="p-3">Customer</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Total</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order) => (
                  order.products.map((product) => (
                    <tr key={order.id} className="border-t">
                      <td className="p-3">{order.id}</td>
                      <td className="p-3">{order.username}</td>
                      <td className="p-3">{product.name}</td>
                      <td className="p-3">{product.quantity}</td>
                      <td className="p-3">₹{order.total}</td>
                      <td className="p-3">{order.orderStatus}</td>
                    </tr>
                  ))
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
