import { Button, Divider } from '@mui/material'
import React from 'react'

const FilterSection = () => {
  return (
    <div className='z-50 space-y-5 bg-white'>
      <div className='flex items-start justify-between h-[40px] px-9 lg:border-r'>
        <p className='text-lg font-semibold'>
          Filter
          </p>
          <Button size='small' className='text-blue-500 cursor-pointer font-semibold'>
            Clear all
          </Button>
      </div>
      <Divider />

      <section>
        
      </section>
    </div>
  )
}

export default FilterSection