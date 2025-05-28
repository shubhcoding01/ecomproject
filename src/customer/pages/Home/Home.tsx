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

            <section className='pt-20'>
              <h1 className='text-lg lg:text-4xl font-bold text-center
               text-primary-color pb-5 lg:pb-20'>Shop By Category</h1>
              <ShopByCategory/>
            </section>

            <section className='pt-20 lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
              <img className='w-full h-full' src="https://t4.ftcdn.net/jpg/01/89/49/37/360_F_189493703_22JMn19BCJuTJAkb9tfhOWpmGHCKungn.jpg" alt="" />
            </section>
            
        </div>
    </>
  )
}

export default Home