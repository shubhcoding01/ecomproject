import React from 'react'

const ShopByCategoryCard = () => {
  return (
    <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>

        <div className='w-[150px] h-[150px] relative overflow-hidden rounded-full'>
            <img className='group-hover:scale-95 transition-transform 
            transition-duration-700 w-full h-full object-cover object-top' 
            src="https://m.media-amazon.com/images/I/619IDSfXDoL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
        </div>
        <h1>Kitchen</h1>
    </div>
  )
}

export default ShopByCategoryCard