import { Box, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const Addressform = () => {
    const formik= useFormik(
        {
            initialValues: {
                name: '',
                mobile: '',
                pincode: '',
                address: '',
                city: '',
                state: '',
                locality: ''
            },
            validationSchema:  {},
            onSubmit: (values) => {
                console.log('Form submitted:', values);
            }
        }
    )
  return (
    <Box sx={{minWidhth:600, max:"auto"}}>

        <p className='text-xl font-bold text-center pb-5'>Contact Details</p>

            <form>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="mobile"
                            name='mobile'
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.name && formik.errors.mobile}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Name"
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
            </form>
    </Box>
  )
}

export default Addressform