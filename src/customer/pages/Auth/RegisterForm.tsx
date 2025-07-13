import React from 'react'
import { useAppDispatch } from '../../../State/Store';
import { useFormik } from 'formik';
import { sendLoginSignupOtp } from '../../../State/AuthSlice';

const RegisterForm = () => {
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
  
       const handleSendOtp = () =>{
          dispatch(sendLoginSignupOtp({email:formik.values.email}))
        }
  return (
    <div>
                <h1 className='text-center font-bold text-xl text-primary-color pb-8'>Signup</h1>

    </div>
  )
}

export default RegisterForm