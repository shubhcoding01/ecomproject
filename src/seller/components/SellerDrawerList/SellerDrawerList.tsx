import { Add, Dashboard, Inventory, Receipt, ShoppingBag } from '@mui/icons-material'
import React from 'react'

const menu = [
  {
    name:"Dashboard",
    path:"/seller",
    icon:<Dashboard className='text-primary-color'/>,
    activeIcon:<Dashboard className='text-white'/>
  },
  {
    name:"Orders",
    path:"/seller/orders",
    icon:<ShoppingBag className='text-primary-color' />,
    activeIcon:<ShoppingBag className='text-white'/>
  },
  {
    name:"Products",
    path:"/seller/products",
    icon:<Inventory className='text-primary-color'/>,
    activeIcon:<Inventory className='text-white'/>
  },
  {
    name:"Add Product",
    path:"/seller/add-product",
    icon:<Add className='text-primary-color'/>,
    activeIcon:<Add className='text-white'/>
  },
  {
    name:"Payment",
    path:"/seller/payment",
    icon:<Receipt className='text-primary-color'/>,
    activeIcon:<Receipt className='text-white'/>
  },

]

const SellerDrawerList = () => {
  return (
    <div>SellerDrawerList</div>
  )
}

export default SellerDrawerList