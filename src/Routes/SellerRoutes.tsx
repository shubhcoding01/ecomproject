import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../seller/pages/SellerDashboard/Dashboard'

const SellerRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/*' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default SellerRoutes