// import React from 'react'

// const CategoryGrid = () => {
//   return (
//     <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        
//         <div className='col-span-3 row-span-12 text-white'>
//             <img 
//             className='w-full h-full object-cover rounded-md'
//             src="https://m.media-amazon.com/images/I/61JvFLHZ6NL._SX679_.jpg" alt="" />
//         </div>
//         <div className='col-span-2 row-span-6 text-white'>
//             <img 
//             className='w-full h-full object-cover rounded-md'
//             src="https://m.media-amazon.com/images/I/61hYT677lhL._AC_UL960_FMwebp_QL65_.jpg" alt="" />
//         </div>
//         <div className='col-span-4 row-span-6 text-white'>
//             <img 
//             className='w-full h-full object-cover rounded-md'
//             src="https://m.media-amazon.com/images/I/41F8CHFXYYL._SY300_SX300_QL70_FMwebp_.jpg" alt="" />
//         </div>
//         <div className='col-span-3 row-span-12 text-white'>
//             <img 
//             className='w-full h-full object-cover rounded-md'
//             src="https://m.media-amazon.com/images/I/51j2mBT8iiL.jpg" 
//             alt="" />
//         </div>
//         <div className='col-span-4 row-span-6 text-white'>
//             <img 
//             className='w-full h-full object-cover rounded-md'
//             src="https://m.media-amazon.com/images/I/91HYg7+j3-L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
//         </div>
//         <div className='col-span-2 row-span-6 text-white'>
//             <img 
//             className='w-full h-full object-cover rounded-md'
//             src="https://m.media-amazon.com/images/I/713o9x-8dUL._SY695_.jpg" alt="" />
//         </div>
        
//     </div>
//   )
// }

// export default CategoryGrid

import React from 'react';

const categories = [
  {
    src: 'https://m.media-amazon.com/images/I/61JvFLHZ6NL._SX679_.jpg',
    span: 'col-span-3 row-span-12',
    label: 'Laptops',
  },
  {
    src: 'https://m.media-amazon.com/images/I/61hYT677lhL._AC_UL960_FMwebp_QL65_.jpg',
    span: 'col-span-2 row-span-6',
    label: 'Earbuds',
  },
  {
    src: 'https://m.media-amazon.com/images/I/41F8CHFXYYL._SY300_SX300_QL70_FMwebp_.jpg',
    span: 'col-span-4 row-span-6',
    label: 'Smart Home',
  },
  {
    src: 'https://m.media-amazon.com/images/I/51j2mBT8iiL.jpg',
    span: 'col-span-3 row-span-12',
    label: 'Cameras',
  },
  {
    src: 'https://m.media-amazon.com/images/I/91HYg7+j3-L._AC_UL480_FMwebp_QL65_.jpg',
    span: 'col-span-4 row-span-6',
    label: 'Wearables',
  },
  {
    src: 'https://m.media-amazon.com/images/I/713o9x-8dUL._SY695_.jpg',
    span: 'col-span-2 row-span-6',
    label: 'Fashion Tech',
  },
];

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20 py-6'>
      {categories.map((item, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl ${item.span} group transform transition duration-300 hover:scale-[1.03] hover:shadow-2xl`}
        >
          <img
            className='w-full h-full object-cover brightness-90 group-hover:brightness-100 transition duration-300'
            src={item.src}
            alt={item.label}
          />
          {/* Overlay */}
          <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-3 py-2'>
            <h3 className='text-white text-lg font-semibold drop-shadow-md'>
              {item.label}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
