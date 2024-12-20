import React, { useEffect, useState } from 'react'
import UserNavbar from '../../components/UserNavbar'
import { fetchAllProducts } from '../../api/productApi'
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const loadProducts = async () => {
        try {
            const response = await fetchAllProducts();
            setProducts(response.data);
        } catch (error) {
            setError("Failed to load data!");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);
    
    if (loading) {
        return (
            <>
                <UserNavbar />
                <div className='h-screen flex flex-col justify-between items-center text-xl pt-24 sm:pt-14'>Loading...</div>
            </>
        )
    }

    if (error) {
        return (
            <>
                <UserNavbar />
                <div className='h-screen flex flex-col justify-between items-center pt-24 sm:pt-14 text-xl text-red-500'>{error}</div>
            </>
        )
    }


    return (
        <>
            <UserNavbar />

            <div className='min-h-screen pt-24 sm:pt-14 p-4'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {products.map((product) => (
                        <div onClick={() => navigate(`/products/${product.id}`)} key={product.id} className="border rounded-lg shadow-md p-4 mt-5 hover:shadow-2xl transition duration-200 text-center cursor-pointer">

                            <img src={product.image} alt={product.name} className="w-full h-48 object-contain rounded"/>

                            <h2 className="text-lg font-bold mt-4">{product.name}</h2>

                            <p className="text-gray-600">Brand: {product.brand}</p>
                            <p className="text-green-600 font-semibold mt-2">₹{product.price}</p>
                            <p className="text-yellow-500 text-sm mt-1">{product.rating} ⭐</p>
                            <p className="text-sm mt-2 text-gray-500">{product.description}</p>

                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home
