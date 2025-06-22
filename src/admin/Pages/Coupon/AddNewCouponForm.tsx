import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'
import { useFormik } from 'formik'
import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Grid, TextField } from '@mui/material';

interface CouponFormValues {
  code: string,
  discountPercentage: number,
  validityStartDate: Dayjs | null,
  validityEndDate: Dayjs | null,
  minimumOrderValue: number 
}

const AddNewCouponForm = () => {

  const formik = useFormik<CouponFormValues>({
    initialValues: {
      code: '',
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0
    },
    onSubmit: (values) => {

      const formatedValues = {
        ...values,
        validityStartDate: values.validityStartDate ?.toISOString(),
        validityEndDate: values.validityEndDate ?.toISOString()
      }
      console.log('Form values:', values,formatedValues)
      // Handle form submission logic here
    }
  })

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>

        <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>

          <Grid container spacing={2}>
            <Grid size={{xs:12,sm:6}}>

              <TextField
              fullWidth
              label="coupon code"
              name="code"
              value={formik.values.code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.code && Boolean(formik.errors.code)}
              helperText={formik.touched.code && formik.errors.code}
              required
            />

            </Grid>

            <Grid size={{xs:12,sm:6}}>

              <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPercentage"
              value={formik.values.discountPercentage}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
              helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
              required
            />

            </Grid>
            <Grid size={{xs:12,sm:6}}>

                <DatePicker
                  sx={{ width: '100%' }}
                  label="Validity Start Date"
                  name="validityStartDate"
                  value={formik.values.validityStartDate}
                  onChange={(value) => formik.setFieldValue('validityStartDate', value)}
                />

            </Grid>

            <Grid size={{xs:12,sm:6}}>

                <DatePicker
                  sx={{ width: '100%' }}
                  label="Validity End Date"
                  name="validityEndDate"
                  value={formik.values.validityEndDate}
                  onChange={(value) => formik.setFieldValue('validityEndDate', value)}
                />
                </Grid>

                <Grid size={{xs:12,sm:6}}>

              <TextField
              fullWidth
              label="Minumum Order Value"
              name="minimumOrderValue"
              value={formik.values.minimumOrderValue}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
              helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
              required
            />

            </Grid>

          </Grid>

        </Box>

      </LocalizationProvider>
    </div>
  )
}

export default AddNewCouponForm