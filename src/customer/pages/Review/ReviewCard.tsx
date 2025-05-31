import { Avatar, Box, Grid, } from '@mui/material'


import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
        <Grid container spacing={2} sx={{ gap: 3 }}>
          <Grid  size={{xs:1}}>
            <Box >
              <Avatar className='text-white' sx={{width:56,height:56, bgcolor:"#1976d2"}}>
                z
              </Avatar>
            </Box>
          </Grid>
        </Grid>
    </div>
  )
}

export default ReviewCard