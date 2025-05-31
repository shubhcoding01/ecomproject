import { Avatar, Box, Grid, } from '@mui/material'


import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
        <Grid container spacing={8}  >
          <Grid  size={{xs:1}}>
            <Box >
              <Avatar className='text-white' sx={{width:56,height:56, bgcolor:"#1976d2"}}>
                z
              </Avatar>
            </Box>
          </Grid>
          <Grid size={{xs:9}}>
          <div className='space-y-2'>
            <div>
              <p className='font-semibold text-lg'>Shubh</p>
              <p className='opacity-70'>2025-05-31T10:06:18</p>
            </div>
          </div>
        </Grid>
        </Grid>
        
    </div>
  )
}

export default ReviewCard