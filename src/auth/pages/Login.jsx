import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import '../../styles/style.css'
import icon from '../../../public/assets/icon.png'
import { AuthContext } from '../../contexts/AuthContexts'


const Login = () => {

    const { userLogin } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!username || !password) {
            setError("Please fill in all the fields");
            return;
        }

        try {
            await userLogin({ username, password });
            setSuccess('Login Successful');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className='loginsignup_background h-screen flex items-center justify-center'>
            <div className='bg-transparent/25 sm:w-[350px] lg:w-[400px] h-[530px] rounded-2xl flex flex-col items-center justify-between'>
                <div className='bg-transparent flex flex-col items-center w-full'>
                    <img src={icon} alt="logo" className='w-16 mt-10' />
                    <form onSubmit={handleLogin} className='flex flex-col justify-center gap-4 p-10 font-medium w-full'>
                        <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" className='border border-black outline-black rounded-lg h-10 p-4' />
                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" className='border border-black outline-black rounded-lg h-10 p-4' />

                        <input type="submit" value="Login" className='border bg-blue-300 h-11 rounded-lg outline-black border-black mt-5 cursor-pointer hover:bg-blue-400' />

                        {error && <p className="text-red-900">{error}</p>}
                        {success && <p className="text-green-900">{success}</p>}

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
