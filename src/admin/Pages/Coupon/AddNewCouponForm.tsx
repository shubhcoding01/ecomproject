import { useFormik } from 'formik'
import React from 'react'

const AddNewCouponForm = () => {

  const formik = useFormik({
    initialValues: {
      code: '',
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0
    },
    onSubmit: values => {
      console.log('Form values:', values)
      // Handle form submission logic here
    }
  })

  return (
    <div>AddNewCouponForm</div>
  )
}

export default AddNewCouponForm