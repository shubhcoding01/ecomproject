import React from 'react'

const SellerLoginForm = () => {
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

      </div>
    </div>
  )
}

export default SellerLoginForm