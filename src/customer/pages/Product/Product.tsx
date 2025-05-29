import React from 'react'
import FilterSection from './FilterSection'
import ProductCard from './ProductCard'

const Product = () => {
  return (
    <div className='-z-10 mt-10'>
        <div>
            <h1 className="text-3xl text-center font-bold text-gray-600 pb-5 px-9
            uppercase space-x-2">Women Saree</h1>
        </div>
        <div className='lg:flex'>
            <section className="filter_section">
                <FilterSection />
            </section>
            <section className="products_section">
                <ProductCard />
            </section>
        </div>
    </div>
  )
}

export default Product