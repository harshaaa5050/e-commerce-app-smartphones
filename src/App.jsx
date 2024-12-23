import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './auth/pages/Login'
import Signup from './auth/pages/Signup'
import Home from './user/pages/Home'
import ProductDetails from './user/pages/ProductDetails'
import { AuthProvider } from './contexts/AuthContexts'
// import AdminRoutes from './admin/routes/AdminRoutes'
// import UserRoutes from './user/routes/UserRoutes'
import Cart from './user/pages/Cart'
import Checkout from './user/pages/Checkout'
import Orders from './user/pages/Orders'
import UserProtectedRoutes from './user/routes/UserProtectedRoutes'
import { CartProvider } from './contexts/CartContext'

const App = () => {
  return (

    <AuthProvider>
      <CartProvider>
        <Routes>

          {/* public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path='/cart' element={
            <UserProtectedRoutes>
              <Cart />
            </UserProtectedRoutes>
          } />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/orders' element={<Orders />} />
          {/* protected routes */}
          {/* <Route path="admin/*" element={<AdminRoutes />} />
          <Route path="user/*" element={<UserRoutes />} /> */}
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
