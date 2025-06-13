import { TextField } from '@mui/material';
import { useFormik } from 'formik'
import React, { use } from 'react'

const SellerLoginForm = () => {
  const formik = useFormik({
    initialValues:{
      email: '',
      otp: '',
    },
    onSubmit: (values) => {
      // Logic to handle login goes here
      console.log("Login values:", values);
    },
  })
  return (
    <div>
      <div className='spyace-y-9'>
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

      </div>
    </div>
  )
}

export default SellerLoginForm