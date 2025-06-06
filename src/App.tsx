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
import Account from './customer/pages/Account/Account';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    

      <ThemeProvider theme={customeTheme}>
        <div>
          
          {/* <Home /> */}
          {/* <Product /> */}
          {/* <ProductDetails/> */}
          {/* <Review /> */}
          {/* <Cart /> */}
          {/* <Checkout /> */}
          {/* <Account /> */}

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/review" element={<Review />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/account/*" element={<Account />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        
      </ThemeProvider>
      
      

    
  );
}

export default App;
