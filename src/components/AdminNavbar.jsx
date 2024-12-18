import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import icon from '../../public/assets/icon.png'
import account from '../../public/assets/account.png'
import orders from '../../public/assets/orders.png'
import users from '../../public/assets/users.png'
import products from '../../public/assets/products.png'

const AdminNavbar = () => {
    const navigate = useNavigate();

    return (
        <nav className='flex-col shadow-md p-2 bg-purple-200'>
            <div className='flex justify-between items-center'>
                {/* logo and name */}
                <div className='flex items-center cursor-pointer' onClick={()=>{navigate('/dashboard')}}>
                    <img className='w-10 p-1' src={icon} alt="logo" />
                    <h1 className='text-2xl font-semibold font-serif p-1'>SmartKart</h1>
                </div>


                {/* right side of navbar for larger devices*/}
                <div className='flex items-center justify-between gap-2'>

                    {/* user's list */}
                    <NavLink to='/admin/users' className='flex items-center justify-center gap-1 text-black hover:bg-purple-300 hover:rounded-full pr-2 py-2'>
                        <img src={users} alt="users" className='w-7'/>
                        <h2 className='font-semibold sm:flex hidden'>Users</h2>
                    </NavLink>

                    {/* products list */}
                    <NavLink to='/admin/products' className='flex items-center justify-center gap-1 text-black hover:bg-purple-300 hover:rounded-full py-2'>
                        <img src={products} alt="users" className='w-7'/>
                        <h2 className='font-semibold sm:flex hidden'>Products</h2>
                    </NavLink>

                    {/* orders icon and name */}
                    <NavLink to='/admin/orders' className='flex items-center justify-center gap-1 text-black hover:bg-purple-300 hover:rounded-full px-2 py-2'>
                        <img src={orders} alt="orders" className='w-7' />
                        <h2 className='font-semibold sm:flex hidden'>Orders</h2>
                    </NavLink>
                    
                    {/* account symbol and name */}
                    <div className='flex items-center justify-between cursor-pointer'>
                        <img src={account} alt="account" className='w-7' />
                        <h2 className='font-semibold sm:flex hidden'>Admin</h2>
                    </div>

                </div>

            </div>


        </nav>
    )
}

export default AdminNavbar
