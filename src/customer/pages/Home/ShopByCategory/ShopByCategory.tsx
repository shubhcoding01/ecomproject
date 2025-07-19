// import React from 'react'
// import ShopByCategoryCard from './ShopByCategoryCard'

// const ShopByCategory = () => {
//   return (
//     <div className='flex flex-wrap justify-between lg:px-20 gap-7'>
//         {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((item)=><ShopByCategoryCard />)}
//     </div>
//   )
// }

// export default ShopByCategory

// import React from 'react';
// import { Grid } from '@mui/material';
// import ShopByCategoryCard from './ShopByCategoryCard';

// const ShopByCategory = () => (
//   <Grid container spacing={3} justifyContent="center">
//     {[...Array(12)].map((_, i) => (
//       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}><ShopByCategoryCard /></Grid>
//     ))}
//   </Grid>
// );

// export default ShopByCategory;

import React from 'react';
import { Grid } from '@mui/material';
import ShopByCategoryCard from './ShopByCategoryCard';

const categories = [
  { title: 'Kitchen', image: 'https://m.media-amazon.com/images/I/619IDSfXDoL._AC_UL480_FMwebp_QL65_.jpg' },
  { title: 'Electronics', image: 'https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg' },
  { title: 'Home Decor', image: 'https://m.media-amazon.com/images/I/71oU30G7qVL._AC_UL480_FMwebp_QL65_.jpg' },
  { title: 'Men Fashion', image: 'https://m.media-amazon.com/images/I/91HYg7+j3-L._AC_UL480_FMwebp_QL65_.jpg' },
  { title: 'Women Fashion', image: 'https://m.media-amazon.com/images/I/713o9x-8dUL._SY695_.jpg' },
  { title: 'Fitness', image: 'https://m.media-amazon.com/images/I/61-vRq2ulOL._AC_UY327_FMwebp_QL65_.jpg' },
  { title: 'Books', image: 'https://m.media-amazon.com/images/I/71tYj5oVwqL._AC_UL480_FMwebp_QL65_.jpg' },
  { title: 'Toys', image: 'https://m.media-amazon.com/images/I/41F8CHFXYYL._SY300_SX300_QL70_FMwebp_.jpg' },
  { title: 'Gaming', image: 'https://m.media-amazon.com/images/I/81f+eEobiOL._AC_UY327_FMwebp_QL65_.jpg' },
  { title: 'Beauty', image: 'https://m.media-amazon.com/images/I/81m6U3w3GEL._AC_UL480_FMwebp_QL65_.jpg' },
  { title: 'Grocery', image: 'https://m.media-amazon.com/images/I/51j2mBT8iiL.jpg' },
  { title: 'Footwear', image: 'https://m.media-amazon.com/images/I/61JvFLHZ6NL._SX679_.jpg' },
];

const ShopByCategory = () => (
  <div className='py-8 px-4 lg:px-20'>
    <h2 className='text-2xl font-bold mb-6'>🛍️ Shop by Category</h2>
    <Grid container spacing={4} justifyContent="center">
      {categories.map((cat, idx) => (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          <ShopByCategoryCard {...cat} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default ShopByCategory;
