import { Box, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'

const CreateDealForm = () => {
    const formik = useFormik({
    initialValues: {
        discount:"",
      category: '',
      
    },
    onSubmit: (values) => {
      console.log(values);
    },
    })
  return (
    <div>
        <Box component={"form"} onSubmit={formik.handleSubmit} 
        className='space-y-6' >
            <Typography>
                Create New Deal
            </Typography>
        </Box>
    </div>
  )
}

export default CreateDealForm