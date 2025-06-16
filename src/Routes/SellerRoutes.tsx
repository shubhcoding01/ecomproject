import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'
import Product from '../customer/pages/Product/Product'

const SellerRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/' element={<Product/>}/>
        </Routes>
    </div>
  )
}

export default SellerRoutes