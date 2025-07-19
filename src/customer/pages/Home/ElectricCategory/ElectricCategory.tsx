// import React from 'react'
// import ElectricCategoryCard from './ElectricCategoryCard'

// const ElectricCategory = () => {
//   return (
//     <div className='flex flex-wrap justify-between py-5 lg:px-20 border-b'>
//         {[1,1,1,1,1,1,1].map((item) => <ElectricCategoryCard />)}
        
//     </div>
//   )
// }

// export default ElectricCategory

// import React from 'react';
// import { Grid } from '@mui/material';
// import ElectricCategoryCard from './ElectricCategoryCard';

// const ElectricCategory = () => (
//   <Grid container spacing={2} justifyContent="center">
//     {[...Array(7)].map((_, i) => (
//       <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 3, md: 4 }}><ElectricCategoryCard /></Grid>
//     ))}
//   </Grid>
// );

// export default ElectricCategory;

import React from 'react';
import { Grid } from '@mui/material';
import ElectricCategoryCard from './ElectricCategoryCard';

import {
  LaptopMac,
  Smartphone,
  Headphones,
  Tv,
  Watch,
  CameraAlt,
  TabletMac,
} from '@mui/icons-material';

const categories = [
  { icon: LaptopMac, label: 'Laptop', color: '#1976d2' },
  { icon: Smartphone, label: 'Smartphone', color: '#d32f2f' },
  { icon: Headphones, label: 'Headphones', color: '#512da8' },
  { icon: Tv, label: 'Television', color: '#388e3c' },
  { icon: Watch, label: 'Smartwatch', color: '#f57c00' },
  { icon: CameraAlt, label: 'Camera', color: '#0288d1' },
  { icon: TabletMac, label: 'Tablet', color: '#c2185b' },
];

const ElectricCategory = () => (
  <Grid container spacing={3} justifyContent="center" sx={{ py: 4, px: { xs: 2, md: 10 } }}>
    {categories.map((item, index) => (
      <Grid container spacing={2} justifyContent="center">
        <ElectricCategoryCard icon={item.icon} label={item.label} color={item.color} />
      </Grid>
    ))}
  </Grid>
);

export default ElectricCategory;

