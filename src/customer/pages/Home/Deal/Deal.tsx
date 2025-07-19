// import React from 'react'
// import DealCard from './DealCard'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// // import Slider from "react-slick";

// const Deal = () => {
//    const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   return (
//     <div className='py-5 lg:px-20'>
//         <div className='flex items-center justify-between'>
//           {/* <Slider {...settings}>

//           </Slider> */}
//           {[1,1,1,1,1,1].map((item)=><DealCard/>)}
//         </div>
//     </div>
//   )

// }

// export default Deal

// import React from 'react';
// import { Grid } from '@mui/material';
// import DealCard from './DealCard';

// const Deal = () => (
//   <Grid container spacing={3} justifyContent="center">
//     {[...Array(6)].map((_, i) => (
//       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}><DealCard /></Grid>
//     ))}
//   </Grid>
// );

// export default Deal;

import React from 'react';
import { Grid } from '@mui/material';
import DealCard from './DealCard';

const dealItems = [
  {
    image: 'https://m.media-amazon.com/images/I/61-vRq2ulOL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Smart Watch',
    discount: '20%',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Laptop',
    discount: '30%',
  },
  {
    image: 'https://m.media-amazon.com/images/I/81f+eEobiOL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Headphones',
    discount: '15%',
  },
  {
    image: 'https://m.media-amazon.com/images/I/61hYT677lhL._AC_UL960_FMwebp_QL65_.jpg',
    title: 'Earbuds',
    discount: '25%',
  },
  {
    image: 'https://m.media-amazon.com/images/I/71TJfAo3nnL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Smartphone',
    discount: '18%',
  },
  {
    image: 'https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UY327_FMwebp_QL65_.jpg',
    title: 'Tablet',
    discount: '22%',
  },
];

const Deal = () => (
  <div className='py-6 px-4 lg:px-20'>
    {/* <h2 className='text-2xl font-bold mb-4'>🔥 Deals of the Day</h2> */}
    <Grid container spacing={3} justifyContent="center">
      {dealItems.map((item, index) => (
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>
          <DealCard {...item} />
        </Grid>
      ))}
    </Grid>
  </div>
);

export default Deal;

