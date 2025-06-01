import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/components/Navbar/Navbar';
import customeTheme from './theme/customeTheme';
import Home from './customer/pages/Home/Home';
import Product from './customer/pages/Product/Product';
import ProductDetails from './customer/pages/Page Details/ProductDetails';
import Review from './customer/pages/Review/Review';
import Cart from './customer/pages/Cart/Cart';
import { Check } from '@mui/icons-material';
import Checkout from './customer/pages/checkout/Checkout';


function App() {
  return (
    

      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar />
          {/* <Home /> */}
          {/* <Product /> */}
          {/* <ProductDetails/> */}
          {/* <Review /> */}
          {/* <Cart /> */}
          <Checkout />
        </div>
        
      </ThemeProvider>
      
      

    
  );
}

export default App;
