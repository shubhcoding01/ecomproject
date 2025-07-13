import React from 'react'
import { useAppDispatch } from '../../../State/Store';
import { useFormik } from 'formik';

const LoginForm = () => {
  const dispatch  = useAppDispatch();
    const formik = useFormik({
      initialValues: {
        email: '',
        otp: '',
      },
      onSubmit: (values) => {
        console.log("Login values:", values);

      },
    });
  return (
    <div>
        <h1 className='text-center font-bold text-xl text-primary-color pb-8'>Login</h1>
    </div>
  )
}

export default LoginForm