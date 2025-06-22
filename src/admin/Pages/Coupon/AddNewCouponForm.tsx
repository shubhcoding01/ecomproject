import { Dayjs } from 'dayjs'
import { useFormik } from 'formik'
import React from 'react'

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
    <div>AddNewCouponForm</div>
  )
}

export default AddNewCouponForm