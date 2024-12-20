import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../../styles/style.css'
import icon from '../../../public/assets/icon.png'
import { AuthContext } from '../../contexts/AuthContexts'

const Signup = () => {

  const { userSignup } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !username || !password) {
      setError("Please fill in all the fields");
      return;
    }

    try {
      const newUser = { email: email, username: username, password: password, role: "user", block: false };
      await userSignup(newUser);
      setSuccess("Signup successful");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className='loginsignup_background h-screen flex items-center justify-center'>
      <div className='bg-transparent/25 h-[530px] sm:w-[350px] lg:w-[400px] rounded-2xl flex flex-col items-center justify-between'>
        <div className='bg-transparent flex flex-col items-center w-full'>

          <img src={icon} alt="logo" className='w-16 mt-10' />
          <form onSubmit={handleSignup} className='flex flex-col justify-center gap-4 p-10 font-medium w-full'>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" className='border border-black outline-black rounded-lg h-10 p-4' />
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" className='border border-black outline-black rounded-lg h-10 p-4' />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" className='border border-black outline-black rounded-lg h-10 p-4' />

            {error && <p className="text-red-900">{error}</p>}
            {success && <p className="text-green-900">{success}</p>}

            <input type="submit" value="Sign Up" className='border bg-blue-300 h-11 rounded-lg outline-black border-black mt-5 cursor-pointer hover:bg-blue-400' />
          </form>

        </div>

        <div className='bg-transparent w-full h-12 flex font-medium rounded-2xl'>
          <NavLink to={'/login'} className='h-full w-full bg-transparent/25 rounded-bl-2xl shadow-inner flex items-center justify-center'>Login</NavLink>
          <NavLink className='h-full w-full rounded-2xl flex items-center justify-center cursor-default'>Sign Up</NavLink>
        </div>

      </div>
    </div>
  )
}

export default Signup
