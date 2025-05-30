import React from 'react'

const ProductDetails = () => {
  return (
    <div className='px-5 lg:px-20 pt-20'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <section className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-[15%] flex flex-wrap lg:flex-col gap-3'>
              {[1,1,1,1].map((item)=><img 
              className='lg:w-full w-[50px] cursor-pointer rounded-md'
              src='https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg' alt=''/>)}
          </div>
          <div className='w-full lg:w-[85%]'>
              <img 
              className='w-full rounded-md'
              src="https://m.media-amazon.com/images/I/61HS4sTDnPL._SY741_.jpg" alt="" />
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetails