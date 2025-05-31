import React from 'react'

const Review = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20'>

      <section className='w-full md:w-1/2 lg:w-[30%] space-y-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/I/61HS4sTDnPL._AC_SR300,375,0,C_BR3_.jpg" alt="" />
        <div>
          <h1 className='text-lg font-semibold'>R Clothing</h1>
          <p className='text-gray-600'>Stylish Men's Shirt</p>
        </div>
      </section>
      
    </div>
  )
}

export default Review