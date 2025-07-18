import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { useAppDispatch } from '../../../State/Store';
import { sendLoginSignupOtp, signup } from '../../../State/AuthSlice';

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      otp: '',
      fullName: '',
    },
    onSubmit: (values) => {
      dispatch(signup({
        email: values.email,
        fullName: values.fullName,
        otp: values.otp,
      }))
      console.log('Register values:', values);
    },
  });

  const handleSendOtp = () => {
    dispatch(sendLoginSignupOtp({ email: formik.values.email }));
  };

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-5">
      <TextField fullWidth label="Full Name" variant="filled" name="fullName" value={formik.values.fullName} onChange={formik.handleChange} />
      <TextField fullWidth label="Email" variant="filled" name="email" value={formik.values.email} onChange={formik.handleChange} />
      <TextField fullWidth label="OTP" variant="filled" name="otp" value={formik.values.otp} onChange={formik.handleChange} />
      {true && <Button onClick={handleSendOtp} fullWidth variant="contained" color="primary">
        Send OTP
      </Button>}
      <Button type="submit" fullWidth variant="contained" color="success">
        Signup
      </Button>
    </form>
  );
};

export default RegisterForm;
