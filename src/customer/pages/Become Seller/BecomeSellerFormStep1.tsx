import { Box, TextField } from '@mui/material'
import React from 'react'

const BecomeSellerFormStep1 = ({formik}:any) => {
  return (
    <Box>
        <p className='text-xl font-bold text-center pb-9'>Contact Details</p>

        <div className='space-y-9'>

            <TextField
                          fullWidth
                          label="Mobile"
                          name="mobile"
                          value={formik.values.mobile}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                          helperText={formik.touched.mobile && formik.errors.mobile}
                          required
                        />

        </div>
    </Box>
  )
}

export default BecomeSellerFormStep1