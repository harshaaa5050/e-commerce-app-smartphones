import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import UserNavbar from '../../components/UserNavbar';
import Footer from '../../components/Footer';
import axios from 'axios';
import { fetchProductsById } from '../../api/productApi';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetchProductsById(id);
                setProduct(response.data);
            } catch (error) {
                setError("Failed to fetch product details");
            } finally{
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    if (loading) {
        return (
            <>
                <UserNavbar />
                <div className="h-screen flex justify-center items-center text-xl">Loading...</div>
                <Footer />
            </>
        );
    }

    if (error) {
        return (
            <>
                <UserNavbar />
                <div className="h-screen flex justify-center items-center text-red-500 text-xl font-semibold">{error}</div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <UserNavbar />
            <div className="min-h-screen pt-24 md:pt-20 p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className='w-1/3 flex items-center justify-center self-center'>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full md:h-96 rounded-lg object-contain"
                        />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
                        <p className="text-gray-600 text-lg mb-2">Brand: {product.brand}</p>
                        <p className="text-green-600 text-xl font-semibold mb-2">₹{product.price}</p>
                        <p className="text-yellow-500 text-lg mb-4">Rating: {product.rating} ⭐</p>

                        <div className='w-96 flex-col gap-6 mt-4 -ml-2'>
                            <NavLink
                                to={'/cart'}
                                className="flex mx-2 my-2 justify-center items-center py-2 bg-pink-300 hover:bg-pink-400 rounded-3xl"
                            >
                                Add to cart
                            </NavLink>
                            <NavLink
                                to={'/checkout'}
                                className="flex mx-2 my-2 justify-center items-center py-2 bg-blue-300 hover:bg-blue-400 rounded-3xl"
                            >
                                Buy Now
                            </NavLink>
                        </div>

                        <p className="text-gray-700 mb-4">{product.description}</p>
                        <h2 className="text-lg font-bold mb-2">Specifications:</h2>
                        <ul className="list-disc pl-5 text-gray-600">
                            {Object.entries(product.specification).map(([key, value]) => (
                                <li key={key} className="capitalize">
                                    <strong>{key}:</strong> {value}
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetails;