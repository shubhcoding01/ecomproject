// import React from 'react'

// const ElectricCategoryCard = () => {
//   return (
//     <div>
//         <img className='object-contain h-10'
//         src="https://m.media-amazon.com/images/I/71pKJ+Mjd8L._AC_UY327_FMwebp_QL65_.jpg" alt="" />
//         <h2 className='font-semibold text-sm'>Laptop</h2>
//     </div>
//   )
// }

// export default ElectricCategoryCard

// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';
// import { LaptopMac } from '@mui/icons-material';

// const ElectricCategoryCard = () => (
//   <Card sx={{ width: 140, textAlign: 'center' }} elevation={3}>
//     <CardContent>
//       <LaptopMac fontSize="large" color="primary" />
//       <Typography variant="subtitle1" fontWeight={600}>Laptop</Typography>
//     </CardContent>
//   </Card>
// );

// export default ElectricCategoryCard;

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

type ElectricCategoryCardProps = {
  icon: React.ElementType;
  label: string;
  color: string;
};

const ElectricCategoryCard: React.FC<ElectricCategoryCardProps> = ({ icon: Icon, label, color }) => (
  <Card
    sx={{
      width: 150,
      height: 150,
      textAlign: 'center',
      background: 'linear-gradient(145deg, #f0f0f0, #dcdcdc)',
      borderRadius: '20px',
      boxShadow: '8px 8px 16px #bebebe, -8px -8px 16px #ffffff',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: 'inset 4px 4px 10px #bebebe, inset -4px -4px 10px #ffffff',
      },
    }}
  >
    <CardContent>
      <Box display="flex" justifyContent="center" alignItems="center" mb={1}>
        <Icon sx={{ fontSize: 40, color }} />
      </Box>
      <Typography variant="subtitle1" fontWeight={600}>
        {label}
      </Typography>
    </CardContent>
  </Card>
);

export default ElectricCategoryCard;

