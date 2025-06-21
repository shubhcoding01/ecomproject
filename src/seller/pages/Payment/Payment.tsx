import { Card, Divider } from '@mui/material'
import React from 'react'

const Payment = () => {
  return (
    <div className=''>
      <Card className='rounded-md space-y-4 p-5'>
        <h1 className='text-gray-600 font-medium'>Total Earning</h1>
        <h1 className='font-bold text-xl pb-1'>₹11664</h1>
        <Divider/>
        <p className='text-gray-600 font-medium pt-1'>Last Payment : <strong>₹0</strong></p>
      </Card>
    </div>
  )
}

export default Payment