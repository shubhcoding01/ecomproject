import { TextField } from '@mui/material';
import React from 'react'

interface BecomeSellerFormStep2Props {
    formik: any;
    }

const BecomeSellerFormStep3:React.FC<BecomeSellerFormStep2Props> = ({formik}) => {
  return (
    <div className='space-y-9'>

        <TextField
          fullWidth
          label="Account Number"
          name="bankDetails.accountNumber"
          value={formik.values.bankDetails.accountNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.bankDetails?.accountNumber && Boolean(formik.errors.bankDetails?.accountNumber)}
          helperText={formik.touched.bankDetails?.accountNumber && formik.errors.bankDetails?.accountNumber}
          required
          />

    </div>
  )
}

export default BecomeSellerFormStep3