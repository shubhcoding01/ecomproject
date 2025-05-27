import React from 'react'
import DealCard from './DealCard'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Deal = () => {
  return (
    <div className='py-5 lg:px-20'>
        <div className='flex items-center justify-between'>
          {[1,1,1,1,1,1].map((item)=><DealCard/>)}
        </div>
    </div>
  )

}

export default Deal