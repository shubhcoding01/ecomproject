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
        <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
</FormControl>
      </section>
    </div>
  )
}

export default FilterSection