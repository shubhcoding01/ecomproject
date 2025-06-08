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
                <Button onClick={handleShowPage} variant='outlined' fullWidth className='!bg-[#3a8cde] hover:!bg-[#2a6bbd]'>
                    {isLogin ? "Login to your account" : "Create a new account"}
                </Button>
            </div>
        </section>

    </div>
  )
}

export default BecomeSeller