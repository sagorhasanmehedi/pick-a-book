import { Box } from '@mui/material';
import React, { useState } from 'react';
import CartSummary from '../component/Cart/CartSummary/CartSummary';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar/Navbar';
import AddAddress from '../component/PlaceOrder/AddAddress/AddAddress';

const Address = () => {
    



    return (
        <div style={{ backgroundColor: "#f1f2f4" }}>
          <Navbar />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box >
              <div className="cart-content">
                <div>
                 <AddAddress />
                </div>
                <div>
                  <CartSummary />
                </div>
              </div>
            </Box>
          </Box>
          <Footer />
        </div>
      );
};

export default Address;