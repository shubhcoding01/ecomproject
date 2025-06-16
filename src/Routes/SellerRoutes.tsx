import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'
import Product from '../customer/pages/Product/Product'
import AddProduct from '../seller/pages/Products/AddProduct'
import Orders from '../seller/pages/Order/Orders'

const SellerRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/add-product' element={<AddProduct/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/account' element={<Profile/>}/>


        </Routes>
    </div>
  )
}

export default SellerRoutes