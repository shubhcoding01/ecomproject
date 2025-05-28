import React from 'react'
import ElectricCategory from './ElectricCategory/ElectricCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import { Shop } from '@mui/icons-material'
import ShopByCategory from './ShopByCategory/ShopByCategory'

const Home = () => {
  return (
    <>
        <div className='space-y-5 lg:space-y-10 relative pb-20'>

            <ElectricCategory/>
            <CategoryGrid/>
            
            <div className='pt-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-center
               text-primary-color pb-5 lg:pb-10'>Today's Deals</h1>
              <Deal/>
            </div>

            <section className='pt-20 '>
              <h1 className='text-lg lg:text-4xl font-bold text-center
               text-primary-color pb-5 lg:pb-20'>Shop By Category</h1>
              <ShopByCategory/>
            </section>

            <section className=' pt-20 lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
              <img className='w-full h-full absolute top-0 left-0 object-cover object-center rounded-lg' 
              src="https://m.media-amazon.com/images/G/01/sell/images/posters/seller-581784080.webp" alt="" />
              <div className='absolute top-1/2 left-4 lg:left-[15rem] 
              transform translate-y-1/2 font-semibold lg-text-4xl space-y-3'>
                <h1>Sell Your Product</h1>
                <p className='text-lg md:text-2xl'>With</p>
                <p className='logo'>Desi Bazaar</p>
              </div>
            </section>
            
        </div>
    </>
  )
}

export default Home