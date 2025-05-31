import React from 'react'
import ReviewCard from './ReviewCard'

const Review = () => {
  return (
    <div className='p-5 lg:px-20 flex flex-col lg:flex-row gap-20'>

      <section className='mt-8 w-full md:w-1/2 lg:w-[30%] space-y-2'>
        <img src="https://images-eu.ssl-images-amazon.com/images/I/61HS4sTDnPL._AC_SR300,375,0,C_BR3_.jpg" alt="" />
        <div>
          <div>
            <h1 className='text-lg font-semibold'>R Clothing</h1>
          <p className='text-gray-600'>Stylish Men's Shirt</p>
          </div>
          <div>
            <div className="price flex items-center gap-3 mt-5 text-2xl">
            <span className="font-sans text-gray-800">₹ 400</span>
            <span className="line-through text-gray-400">₹ 999</span>
            <span className="text-primary-color font-semibold">60% off</span>
          </div>
          </div>
        </div>
      </section>

      <section>
        <ReviewCard />
      </section>
      
    </div>
  )
}

export default Review