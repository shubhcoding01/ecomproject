import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[30rem] cursor-pointer'>
      <img src="https://m.media-amazon.com/images/I/61-vRq2ulOL._AC_UY327_FMwebp_QL65_.jpg" alt="" />

      <div>
        <p className='text-lg font-semibold'>Smart Watch</p>
        <p className='text-2xl font-bold'>20% Off</p>
        <p className='text-balance text-lg'>Shop Now</p>
      </div>
    </div>
  )
}

export default DealCard