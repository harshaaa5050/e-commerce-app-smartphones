import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import UserNavbar from '../../components/UserNavbar';
import Footer from '../../components/Footer';
import { CartContext } from '../../contexts/CartContext';
import delete_icon from '../../../public/assets/delete.png'

const Cart = () => {
  const { cartItems, updateQuantity, totalPrice, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen flex flex-col pt-10">
        <div className="container mx-auto p-6">
          {cartItems.length > 0 &&
          <div className="mt-6">
            <h2 className="text-xl font-bold">Total Price: ₹{totalPrice}</h2>
            <div className="mt-4 flex gap-4">
              <NavLink
                to="/checkout"
                className="px-4 py-2  text-white rounded-lg bg-pink-600 hover:bg-pink-700 "
              >
                Proceed to Checkout
              </NavLink>
              <NavLink
                to="/"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Continue Shopping
              </NavLink>
            </div>
          </div>}

          <h1 className="text-3xl font-bold mt-6 mb-4">Your Cart</h1>
          {cartItems.length > 0 ? (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 items-center p-4 border rounded-lg shadow-md"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-contain cursor-pointer"
                      onClick={() => navigate(`/products/${item.id}`)}
                    />
                    <div className="flex-1">
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-600">Brand: {item.brand}</p>
                      <p className="text-green-600 font-semibold">₹{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => item.quantity === 1? null : updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 bg-gray-300 rounded"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 bg-gray-300 rounded"
                        >
                          +
                        </button>

                        <button onClick={() => removeFromCart(item.id)} className='w-8 hover:bg-slate-300 rounded-md'>
                          <img src={delete_icon} alt="remove"/>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center flex-row items-center justify-center">
              <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
              <NavLink
                to="/"
                className="px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
              >
                Start Shopping
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;