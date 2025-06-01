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
    <Box sx={{ max:"auto"}}>

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
                            label="Mobile"
                            name='mobile'
                            value={formik.values.mobile}
                            onChange={formik.handleChange}
                            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                            helperText={formik.touched.mobile && formik.errors.mobile}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="Pincode"
                            name='pincode'
                            value={formik.values.pincode}
                            onChange={formik.handleChange}
                            error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                            helperText={formik.touched.pincode && formik.errors.pincode}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="address"
                            name='address'
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="city"
                            name='city'
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="state"
                            name='state'
                            value={formik.values.state}
                            onChange={formik.handleChange}
                            error={formik.touched.state && Boolean(formik.errors.state)}
                            helperText={formik.touched.state && formik.errors.state}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <TextField
                            fullWidth
                            label="locality"
                            name='locality'
                            value={formik.values.locality}
                            onChange={formik.handleChange}
                            error={formik.touched.locality && Boolean(formik.errors.locality)}
                            helperText={formik.touched.locality && formik.errors.locality}
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