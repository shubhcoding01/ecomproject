import { Divider } from '@mui/material'
import path from 'path'
import React, { use } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const menu = [
    
        {name: "Orders", path: "/account/orders"},
        {name: "profile", path: "/account/profile"},
        {name: "Address", path: "/account/address"},
        {name: "Wishlist", path: "/account/wishlist"},
        {name: "Payment Methods", path: "/account/payment-methods"},
        {name: "Settings", path: "/account/settings"},
        {name: "Logout", path: "/account/logout"},
]

const Account = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (item:any) => navigate(item.path);
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
        <div>
            <h1 className='text-xl font-bold pb-5'>Shubh</h1>
        </div>
        <Divider/>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 pt-5 lg:min-h-[78vh]'>
            <section className='col-span-1 lg:border-r lg:pr-5 py-5 h-full'>
                {menu.map((item) => (
                    <div onClick={() => handleClick(item)} key={item.name} 
                    className='py-2 px-3 hover:text-white rounded-md cursor-pointer hover:bg-purple-600'>
                            <p>{item.name}</p>
                            </div>
                ))}
            </section>
            <section className='right'>
                right
            </section>
        </div>
    </div>
  )
}

export default Account