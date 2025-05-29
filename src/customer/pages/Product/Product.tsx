import React from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { FilterAlt } from '@mui/icons-material'

const Product = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <div className='-z-10 mt-10'>
        <div>
            <h1 className="text-3xl text-center font-bold text-gray-600 pb-5 px-9
            uppercase space-x-2">Women Saree</h1>
        </div>
        
        <div className='lg:flex'>
            
            <section className="filter_section hidden lg:block w-[20%]">
                
                <FilterSection />

            </section>

            <div className='w-full lg:w-[80%] space-y-5'>

                <div className=''>

                    <div className='relative w-[50%]'>
                        {
                        !isLarge && (<IconButton>
                            <FilterAlt />
                            </IconButton>)
                        }
                        {
                        !isLarge && (<Box>
                            <FilterSection />
                            </Box>)
                        }   
                    </div>

                    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>
</FormControl>

                </div>

                <section className="products_section ">
                
                    <ProductCard />
                
                </section>

            </div>

        </div>

    </div>
  )
}

export default Product