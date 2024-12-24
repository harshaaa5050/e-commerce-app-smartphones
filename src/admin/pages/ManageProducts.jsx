import React, { useContext, useEffect, useState } from 'react';
import AdminNavbar from '../../components/AdminNavbar';
import { NavLink } from 'react-router-dom';
import { AdminContext } from '../../contexts/AdminContext';

const ManageProducts = () => {

  const {allproducts} = useContext(AdminContext);

  return (
    <>
      <AdminNavbar />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6 pt-16">Products</h1>

        {/* Products Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Products List</h2>
            <NavLink to='/admin/addproducts' className="bg-purple-500 text-white py-2 px-4 rounded shadow hover:bg-purple-600">
              Add Products
            </NavLink>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-center  border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2 px-4 border">Product ID</th>
                  <th className="py-2 px-4 border">Product Image</th>
                  <th className="py-2 px-4 border">Name</th>
                  <th className="py-2 px-4 border">Price</th>
                  <th className="py-2 px-4 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {allproducts.map((product) => (
                  <tr key={product.id}>
                    <td className="py-2 px-4 border">{product.id}</td>
                    <td className="py-2 px-4 border"><img src={product.image} alt="product" className='w-14' /></td>
                    <td className="py-2 px-4 border">{product.name}</td>
                    <td className="py-2 px-4 border">₹{product.price}</td>
                    <td className="py-2 px-4 border text-center">
                      {/* Edit and Delete Buttons */}
                      <button className="bg-green-500 text-white py-1 px-2 rounded shadow hover:bg-green-600 mr-2">
                        Edit
                      </button>
                      <button className="bg-red-600 text-white py-1 px-2 rounded shadow hover:bg-red-700">
                        Delete
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

export default ManageProducts;
