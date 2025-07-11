import React, { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Button } from '@mui/material';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='flex justify-center h-[90vh] items-center'>
      <div className="max-w-md h-[85vh] rounded-md shadow-lg">
      <img className='w-full rounded-t-md' src="https://t3.ftcdn.net/jpg/01/82/04/38/240_F_182043866_cQZwPYqKo2xZvZ8sSwW7rdRbf72GcsH4.jpg" alt="" />

      <div className='mt-8 px-10'>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      <div className='flex justify-center items-center gap-2 mt-5'>
        <p>{isLogin && "Don't "} have Account</p>
        <Button size='small' onClick={()=> setIsLogin(!isLogin)}>{isLogin?"Create Account":"login"}</Button>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Auth