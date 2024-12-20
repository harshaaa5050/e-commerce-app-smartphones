import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './auth/pages/Login'
import Signup from './auth/pages/Signup'
import Cart from './user/pages/Cart'
import Orders from './user/pages/Orders'
import AdminNavbar from './components/AdminNavbar'
import Home from './user/pages/Home'
import ProductDetails from './user/pages/ProductDetails'
import Footer from './components/Footer'
import Checkout from './user/pages/Checkout'
import ManageProducts from './admin/pages/ManageProducts'
import Users from './admin/pages/Users'
import ViewOrders from './admin/pages/ViewOrders'
import Dashboard from './admin/pages/Dashboard'
import AddProducts from './admin/pages/AddProducts'
import { AuthProvider } from './contexts/AuthContexts'

const App = () => {
  return (

      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/footer" element={<Footer />} />

          <Route path="/adminnavbar" element={<AdminNavbar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/manageproducts" element={<ManageProducts />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/vieworders" element={<ViewOrders />} />
          <Route path="/admin/addproducts" element={<AddProducts />} />
        </Routes>
      </AuthProvider>
  )
}

export default App
