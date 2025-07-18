import React from 'react';
import { useFormik } from 'formik';
import { Button, CircularProgress, TextField } from '@mui/material';
import store, { useAppDispatch, useAppSelector } from '../../../State/Store';
import { sendLoginSignupOtp, signin } from '../../../State/AuthSlice';

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const{auth}=useAppSelector(store => store);
  const formik = useFormik({
    initialValues: {
      email: '',
      otp: '',
    },
    onSubmit: (values) => {
      console.log('Login values:', values);
      dispatch(signin(values))
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-5">
      <TextField
        fullWidth
        label="Email"
        variant="filled"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      {auth.otpSent && <TextField
        fullWidth
        label="OTP"
        variant="filled"
        name="otp"
        value={formik.values.otp}
        onChange={formik.handleChange}
      />}
      {auth.otpSent?
      <Button type="submit" fullWidth variant="contained" color="success">
        Login
      </Button> :
      <Button onClick={handleSendOtp} fullWidth variant="contained" color="primary">
        {auth.loading?<CircularProgress/>:""}
        Send OTP
      </Button> 
      }
    </form>
  );
};

export default LoginForm;
