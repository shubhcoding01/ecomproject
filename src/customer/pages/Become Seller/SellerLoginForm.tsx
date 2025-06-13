import { Box, TextField, Button } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';

const SellerLoginForm = () => {
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
    <Box className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <p className="text-xl font-bold text-center pb-9 text-primary-color">Login As Seller</p>

      <form onSubmit={formik.handleSubmit} className="space-y-9">
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          required
        />

        {true && <div>
          <p className='font-medium text-sm opacity-55'>Enter Otp Sent to your Email.</p>
          <TextField
          fullWidth
          label="OTP"
          name="otp"
          type="text"
          value={formik.values.otp}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.otp && Boolean(formik.errors.otp)}
          helperText={formik.touched.otp && formik.errors.otp}
          required
        />
          </div>}

        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          className="rounded-md"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default SellerLoginForm;
