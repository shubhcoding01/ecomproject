import React from 'react'

const DealCard = () => {
  return (
    <div className='w-[12rem] cursor-pointer'>
      <img className='border-x-[7px] border-t-[7px] border-pink-500 w-full
      h-[12rem] object-cover object-top' src="https://m.media-amazon.com/images/I/61-vRq2ulOL._AC_UY327_FMwebp_QL65_.jpg" alt="" />

      <div className='border-4 border-black bg-black text-white
      p-2 text-center'>
        <p className='text-lg font-semibold'>Smart Watch</p>
        <p className='text-2xl font-bold'>20% Off</p>
        <p className='text-balance text-lg'>Shop Now</p>
      </div>
    </div>
  )
}

export default DealCard