import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './auth/pages/Login'
import Signup from './auth/pages/Signup'
import UserNavbar from './components/UserNavbar'
import Cart from './user/pages/Cart'
import Orders from './user/pages/Orders'
import AdminNavbar from './components/AdminNavbar'
import Home from './user/pages/Home'
import ProductDetails from './user/pages/ProductDetails'
import Footer from './components/Footer'
import Checkout from './user/pages/Checkout'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/usernavbar" element={<UserNavbar/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/adminnavbar" element={<AdminNavbar/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/footer" element={<Footer/>} />
        </Routes>
      </Router>
  )
}

export default App
