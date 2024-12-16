import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/style.css'
import icon from '../../../public/assets/icon.png'


const Login = () => {
    return (
        <div className='loginsignup_background h-screen flex items-center justify-center'>
            <div className='bg-transparent/25 sm:w-[350px] lg:w-[400px] h-[530px] rounded-2xl flex flex-col items-center justify-between'>
                <div className='bg-transparent flex flex-col items-center w-full'>
                    <img src={icon} alt="logo" className='w-16 mt-10' />
                    <form className='flex flex-col justify-center gap-4 p-10 font-medium w-full'>
                        <input type="text" placeholder="Enter username" className='border border-black outline-black rounded-lg h-10 p-4' />
                        <input type="password" placeholder="Enter password" className='border border-black outline-black rounded-lg h-10 p-4' />


                        <input type="submit" value="Login" className='border bg-blue-300 h-11 rounded-lg outline-black border-black mt-5 cursor-pointer hover:bg-blue-400' />

                    </form>
                </div>
                <div className='bg-transparent w-full h-12 flex font-medium rounded-2xl'>
                    <NavLink className='h-full w-full rounded-2xl flex items-center justify-center cursor-default'>Login</NavLink>
                    <NavLink to={'/signup'} className='h-full w-full bg-transparent/25 rounded-br-2xl shadow-inner flex items-center justify-center'>Sign Up</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Login
