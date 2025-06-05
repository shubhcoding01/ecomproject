import { Divider } from '@mui/material'
import React from 'react'

const ProfileFieldCard = () => {
  return (
    <div className='p-5 flex items-center bg-slate-50'>
        <p className='w-20 lg:w-36 pr-5'>{key}</p>
        <Divider orientation="vertical" flexItem />
    </div>
  )
}

export default ProfileFieldCard