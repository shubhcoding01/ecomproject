import React from 'react'
import DealCard from './DealCard'

const Deal = () => {
  return (
    <div className='py-5 lg:px-20'>
        {[1,1,1,1,1,1].map((item)=><DealCard/>)}
    </div>
  )

}

export default Deal