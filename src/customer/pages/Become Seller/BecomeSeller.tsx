import React, { useState } from 'react'
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';

const BecomeSeller = () => {
    const [isLogin, setIsLogin] = useState(false);
    
    const handleShowPage = () => {
        setIsLogin(!isLogin);
    }

  return (
    <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
        <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md bg-white'>

            {isLogin ? <SellerAccountForm /> : <SellerLoginForm />}
        </section>

    </div>
  )
}

export default BecomeSeller