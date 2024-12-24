import React from 'react'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Orders from '../pages/Orders'

const UserRoutes = [
    {path: '/cart', element: <Cart/>},
    {path:'/checkout', element:<Checkout/>},
    {path:'/orders', element:<Orders/>}
]

export default UserRoutes
