import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './auth/pages/Login'
import Signup from './auth/pages/Signup'
import Home from './user/pages/Home'
import ProductDetails from './user/pages/ProductDetails'
import { AuthProvider } from './contexts/AuthContexts'
import UserProtectedRoutes from './user/routes/UserProtectedRoutes'
import { CartProvider } from './contexts/CartContext'
import UserRoutes from './user/routes/UserRoutes'
import AdminProtectedRoutes from './admin/routes/AdminProtectedRoutes'
import AdminRoutes from './admin/routes/AdminRoutes'
import Dashboard from './admin/pages/Dashboard'
import { AdminProvider } from './contexts/AdminContext'

const App = () => {
  return (

    <AuthProvider>
      <CartProvider>
        <AdminProvider>
          <Routes>

            {/* public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            <Route element={<UserProtectedRoutes />}>
              {UserRoutes.map(({ path, element }, index) => (<Route key={index} path={path} element={element} />))}
            </Route>

            <Route element={<AdminProtectedRoutes />}>
              {AdminRoutes.map(({ path, element }, index) => (<Route key={index} path={path} element={element} />))}
            </Route>

          </Routes>
        </AdminProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
