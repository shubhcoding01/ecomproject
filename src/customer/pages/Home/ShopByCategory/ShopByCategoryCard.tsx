// import React from 'react'
// import './ShopByCategory.css'; // Assuming you have a CSS file for styles

// const ShopByCategoryCard = () => {
//   return (
//     <div className='flex gap-3 flex-col justify-center items-center group cursor-pointer'>

//         <div className='custome-border w-[150px] h-[150px] lg:w-[249px] lg:h-[249px] relative overflow-hidden rounded-full bg-primary-color'>
//             <img className='rounded-full group-hover:scale-95 transition-transform 
//             transition-duration-700 w-full h-full object-cover object-top' 
//             src="https://m.media-amazon.com/images/I/619IDSfXDoL._AC_UL480_FMwebp_QL65_.jpg" alt="" />
//         </div>
//         <h1>Kitchen</h1>
//     </div>
//   )
// }

// export default ShopByCategoryCard

// import React from 'react';
// import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';

// const ShopByCategoryCard = () => (
//   <Card sx={{ width: 180, textAlign: 'center' }} elevation={3}>
//     <CardActionArea>
//       <CardMedia
//         component="img"
//         image="https://m.media-amazon.com/images/I/619IDSfXDoL._AC_UL480_FMwebp_QL65_.jpg"
//         alt="Kitchen"
//         sx={{ height: 180, objectFit: 'cover' }}
//       />
//       <CardContent>
//         <Typography variant="subtitle1" fontWeight={600}>Kitchen</Typography>
//       </CardContent>
//     </CardActionArea>
//   </Card>
// );

// export default ShopByCategoryCard;

import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from '@mui/material';

type ShopByCategoryCardProps = {
  image: string;
  title: string;
};

const ShopByCategoryCard = ({ image, title }: ShopByCategoryCardProps) => (
  <Card
    sx={{
      width: 180,
      borderRadius: '50%',
      overflow: 'hidden',
      textAlign: 'center',
      transition: 'transform 0.3s, box-shadow 0.3s',
      boxShadow: '6px 6px 12px rgba(0,0,0,0.15)',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '4px 4px 18px rgba(0,0,0,0.25)',
      },
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 180,
          width: 180,
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
      <CardContent sx={{ paddingBottom: 2 }}>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ShopByCategoryCard;
