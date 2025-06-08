import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';
import { Button } from '@mui/material';

const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false);
    
    const handleShowPage = () => {
        setIsLogin(!isLogin);
    }

  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md bg-white'>

            {isLogin ? <SellerAccountForm /> : <SellerLoginForm />}

            <div className='mt-10 space-y-2'>
                <h1 className='text-lg font-semibold'>Already have an account?</h1>
                <p className='text-sm text-gray-500'>If you already have an account, you can login to your seller account.</p>
                <Button onClick={handleShowPage} variant='outlined' fullWidth className='bg-gray-100 hover:bg-gray-200 text-gray-700'>
                    {isLogin ? "Login to your account" : "Create a new account"}
                </Button>
            </div>
        </section>
        <section className='hidden md:col-span-1 lg:col-span-2 md:flex justify-center items-center'>
            
            <div className='flex flex-col items-center justify-center space-y-4'>
                <h1 className='text-2xl font-bold'>Become a Seller</h1>
                <p className='text-gray-600 text-center'>Join our community of sellers and start selling your products today!</p>
                <img src="https://m.media-amazon.com/images/G/31/amazonservices/NSI_Hero_.webp" alt="Seller" className='w-3/4 h-auto' />
            </div>
             
        </section>

    </div>
  )
}

export default BecomeSeller