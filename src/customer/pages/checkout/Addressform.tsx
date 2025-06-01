import { Box, Grid } from '@mui/material'
import React from 'react'

const Addressform = () => {
  return (
    <Box sx={{minWidhth:600, max:"auto"}}>

        <p className='text-xl font-bold text-center pb-5'>Contact Details</p>

            <form>
                <Grid container spacing={8}>
                    <Grid size={{xs:12}}>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                    <Grid size={{xs:12}}>
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                    <Grid size={{xs:12}}>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </Grid>
                    <Grid size={{xs:12}}>
                        <input
                            type="tel"
                            placeholder="Mobile Number"
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