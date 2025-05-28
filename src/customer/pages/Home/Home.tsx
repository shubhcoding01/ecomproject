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
              src="https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-d5cc-622f-9c54-470531e98811/raw?se=2025-05-28T07%3A51%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=92fe22e1-b954-5741-bccd-57d95ffb7936&skoid=bbd22fc4-f881-4ea4-b2f3-c12033cf6a8b&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-05-27T21%3A21%3A27Z&ske=2025-05-28T21%3A21%3A27Z&sks=b&skv=2024-08-04&sig=r/z7QbxcHOrnXC3kJRRdAvHcy0rQCUPjMkWv2XIoVTA%3D" alt="" />
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