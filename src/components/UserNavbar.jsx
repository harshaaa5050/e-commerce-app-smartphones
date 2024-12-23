import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import icon from '../../public/assets/icon.png'
import cart_icon from '../../public/assets/cart_icon.png'
import search from '../../public/assets/search.png'
import account from '../../public/assets/account.png'
import orders from '../../public/assets/orders.png'
import { AuthContext } from '../contexts/AuthContexts'

const UserNavbar = () => {

    const navigate = useNavigate();
    const { logout} = useContext(AuthContext);
    const user = localStorage.getItem("user");
    const username = localStorage.getItem("username");

    return (
        <nav className='flex-col shadow-md p-2 w-full fixed bg-white'>
            <div className='flex justify-between items-center'>
                {/* logo and name */}
                <div className='flex items-center cursor-pointer' onClick={()=>{navigate('/')}}>
                    <img className='w-10 p-1' src={icon} alt="logo" />
                    <h1 className='text-2xl font-semibold font-serif p-1'>SmartKart</h1>
                </div>

                {/* search bar and input box */}
                <div className='sm:flex justify-between items-center sm:visible hidden'>
                    <img src={search} className='w-6' />
                    <input type="text" placeholder='Search here' className='border-b border-black outline-none' />
                </div>

                {/* right side of navbar for larger devices*/}
                <div className='flex items-center justify-between gap-3'>
                    {/* cart icon and name */}
                    <NavLink to='/cart' className='flex items-center justify-between hover:-translate-y-0.5'>
                        <img src={cart_icon} alt="cart" className='w-7' />
                        <h2 className='font-semibold sm:flex hidden'>Cart</h2>
                    </NavLink>

                    {user ? 

                    <div className='relative group'>
                       
                        <div className='flex items-center justify-between cursor-pointer'>
                            <img src={account} alt="account" className='w-7' />
                            <h2 className='font-semibold sm:flex hidden'>{username.length > 9 ? `${username.slice(0,9)}...` : username }</h2>
                        </div>

                        <div className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 right-0 bg-white border border-gray-300 rounded-lg shadow-lg pt-2 w-32'>
                            

                            <NavLink to='/orders' className='flex items-center justify-center gap-1 text-gray-700 hover:bg-gray-100 px-4 py-2'>
                                <img src={orders} alt="orders" className='w-7' />
                                <h2 className='font-semibold'>Orders</h2>
                            </NavLink>

                            
                            <div className='flex items-center justify-center px-4 py-2'>
                                <button onClick={logout} className='w-32 h-10 flex items-center justify-center font-medium rounded-2xl bg-pink-300 hover:bg-pink-400'>Logout</button>
                            </div>
                        </div>
                    </div>
                    :
                    <NavLink to="/login" className='w-32 h-10 flex items-center justify-center font-medium rounded-2xl bg-pink-300 hover:bg-pink-400'>Login/Signup</NavLink>}
                </div>

            </div>

            {/* searchbar for small devices */}
            <div className='flex justify-between items-center sm:hidden visible w-full'>
                <img src={search} className='w-6' />
                <input type="text" placeholder='Search here' className='border-b border-black outline-none w-full' />
            </div>

        </nav>
    )
}

export default UserNavbar