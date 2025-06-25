// import React from 'react'
// import ElectricCategory from './ElectricCategory/ElectricCategory'
// import CategoryGrid from './CategoryGrid/CategoryGrid'
// import Deal from './Deal/Deal'
// import { Shop, Storefront } from '@mui/icons-material'
// import ShopByCategory from './ShopByCategory/ShopByCategory'
// import { Button } from '@mui/material'

// const Home = () => {
//   return (
//     <>
//         <div className='space-y-5 lg:space-y-10 relative pb-20'>

//             <ElectricCategory/>
//             <CategoryGrid/>
            
//             <div className='pt-20'>
//               <h1 className='text-lg lg:text-4xl font-bold text-center
//                text-primary-color pb-5 lg:pb-10'>Today's Deals</h1>
//               <Deal/>
//             </div>

//             <section className='pt-20 '>
//               <h1 className='text-lg lg:text-4xl font-bold text-center
//                text-primary-color pb-5 lg:pb-20'>Shop By Category</h1>
//               <ShopByCategory/>
//             </section>

//             <section className=' pt-20 lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
//               <img className='w-full h-full absolute top-0 left-0 object-cover object-center rounded-lg' 
//               src="https://m.media-amazon.com/images/G/01/sell/images/posters/seller-581784080.webp" alt="" />
//               <div className='absolute top-1/2 left-4 lg:left-[15rem] 
//               transform-translate-y-1/2 font-semibold lg-text-4xl space-y-3'>
//                 <h1>Sell Your Product</h1>
//                 <p className='text-lg md:text-2xl'>With</p>
//                 <p className='logo'>Desi Bazaar</p>

//                 <div className='pt-6 flex justify-center'>
//                   <Button startIcon={<Storefront/>} variant='contained' size='large'>
//                     Become a Seller
//                   </Button>
//                 </div>
//               </div>
//             </section>
            
//         </div>
//     </>
//   )
// }

// export default Home


import React from 'react';
import { Storefront } from '@mui/icons-material';
import { Button, Typography, Container, Box } from '@mui/material';
import ElectricCategory from './ElectricCategory/ElectricCategory';
import CategoryGrid from './CategoryGrid/CategoryGrid';
import Deal from './Deal/Deal';
import ShopByCategory from './ShopByCategory/ShopByCategory';

const Home = () => {
  return (
    <Box sx={{ pb: 10 }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', height: { xs: 300, lg: 500 }, mb: 10 }}>
        <img
          src="https://images.unsplash.com/photo-1580910051070-97f7303ed6e1"
          alt="Hero"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            px: { xs: 4, lg: 20 },
            color: '#fff',
          }}
        >
          <Typography variant="h3" fontWeight="bold">Your One-Stop Marketplace</Typography>
          <Typography variant="h6" sx={{ my: 2, maxWidth: 500 }}>Discover top deals, trending categories, and premium quality.</Typography>
          <Button variant="contained" color="primary" size="large">Shop Now</Button>
        </Box>
      </Box>

      {/* Electric Category */}
      <Box sx={{ bgcolor: '#f9f9f9', py: 10 }}>
        <Typography variant="h4" textAlign="center" color="primary" fontWeight="bold" mb={4}>Electronics & Gadgets</Typography>
        <Container>
          <ElectricCategory />
        </Container>
      </Box>

      {/* Category Grid */}
      <Box py={10}>
        <Typography variant="h4" textAlign="center" color="primary" fontWeight="bold" mb={4}>Top Categories</Typography>
        <CategoryGrid />
      </Box>

      {/* Deals Section */}
      <Box sx={{ py: 10, background: 'linear-gradient(to right, #ffe4e6, #e0e7ff)' }}>
        <Typography variant="h4" textAlign="center" color="secondary" fontWeight="bold" mb={4}>🔥 Today's Deals</Typography>
        <Container>
          <Deal />
        </Container>
      </Box>

      {/* Shop By Category */}
      <Box py={10}>
        <Typography variant="h4" textAlign="center" color="primary" fontWeight="bold" mb={6}>Shop By Category</Typography>
        <Container>
          <ShopByCategory />
        </Container>
      </Box>

      {/* Seller CTA */}
      <Box sx={{ position: 'relative', borderRadius: 4, overflow: 'hidden', mt: 10 }}>
        <img
          src="https://m.media-amazon.com/images/G/01/sell/images/posters/seller-581784080.webp"
          alt="Sell"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            p: 4,
          }}
        >
          <Typography variant="h4" fontWeight="bold">Sell Your Products with Desi Bazaar</Typography>
          <Typography variant="h6" mt={1}>Reach millions of customers and grow your business</Typography>
          <Button variant="contained" startIcon={<Storefront />} sx={{ mt: 3 }}>Become a Seller</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
