import { Dashboard } from '@mui/icons-material'
import React from 'react'

const menu = [
  {
    name:"Dashboard",
    path:"/seller",
    icon:<Dashboard className='text-primary-color'/>,
    activeIcon:<Dashboard className='text-white'/>
  }
]

const SellerDrawerList = () => {
  return (
    <div>SellerDrawerList</div>
  )
}

export default SellerDrawerList