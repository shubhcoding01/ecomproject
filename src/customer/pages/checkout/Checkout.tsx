import { Button } from '@mui/material'
import React from 'react'

const Checkout = () => {
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <div className='lg:col-span-2 space-y-3'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-semibold'>Select Address</h1>
                    <Button>
                        Add New Address
                    </Button>
                </div>
                
                
                
            </div>

        </div>
    </div>
  )
}

export default Checkout