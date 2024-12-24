import React from 'react'
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users'
import ManageProducts from '../pages/ManageProducts'
import ViewOrders from '../pages/ViewOrders'
import AddProducts from '../pages/AddProducts'

const AdminRoutes = [

     {path:'/dashboard', element:<Dashboard />},
     {path:'/admin/users', element:<Users />},
     {path:'/admin/manageproducts', element:<ManageProducts />},
     {path:'/admin/vieworders', element:<ViewOrders />},
     {path:'/admin/addproducts', element:<AddProducts />}

]

export default AdminRoutes
