import React, { useContext, useEffect, useState } from "react";
import AdminNavbar from '../../components/AdminNavbar';
import { useNavigate } from "react-router-dom";
import { addNewProduct, fetchAllProducts } from "../../api/productApi";
import { AdminContext } from "../../contexts/AdminContext";

const AddProducts = () => {
    const navigate = useNavigate();

    const {setAllProducts} = useContext(AdminContext);

    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        price: "",
        image: "",
        rating: "",
        description: "",
        display: "",
        processor: "",
        ram: "",
        camera: "",
        battery: "",
        storage: "",
        os: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const newProduct = {
            id: (Date.now()).toString(),
            name: formData.name,
            brand: formData.brand,
            price: formData.price,
            image: formData.image,
            rating: formData.rating,
            description: formData.description,
            specification: {
                display: formData.display,
                processor: formData.processor,
                ram: formData.ram,
                camera: formData.camera,
                battery: formData.battery,
                storage: formData.storage,
                os: formData.os
            }
        }
        const {data: response} = await addNewProduct(newProduct);
        setAllProducts((prevProducts) => [...prevProducts, response]);
        setTimeout(() => navigate("/admin/manageproducts"), 1000);
    };

    return (
        <>
            <AdminNavbar />
            <div className="min-h-screen bg-gray-100 py-10">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 pt-14">
                    <h1 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                        Add Product
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Product Name */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Product Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter product name"
                                required
                            />
                        </div>

                        {/* Brand */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Brand
                            </label>
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter brand"
                                required
                            />
                        </div>

                        {/* Price */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Price (in ₹)
                            </label>
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter price"
                                required
                            />
                        </div>

                        {/* Image URL */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Image URL
                            </label>
                            <input
                                type="url"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter image URL"
                                required
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Rating (out of 5)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                max="5"
                                name="rating"
                                value={formData.rating}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter rating"
                                required
                            />
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-gray-600 font-medium mb-1">
                                Description
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter description"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-4">
                            {["display", "processor", "ram", "camera", "battery", "storage", "os"].map((field) => (
                                <div key={field}>
                                    <label className="block text-gray-600 font-medium mb-1 capitalize">
                                        {field}
                                    </label>
                                    <input
                                        type="text"
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500"
                                        placeholder={`Enter ${field}`}
                                        required
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-pink-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-pink-700"
                            >
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddProducts;