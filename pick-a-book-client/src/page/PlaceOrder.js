import { Box } from '@mui/material';
import React from 'react';
import CartSummary from '../component/Cart/CartSummary/CartSummary';
import Footer from '../component/Footer/Footer';
import Navbar from '../component/Navbar/Navbar/Navbar';
import PaymentMethod from '../component/PlaceOrder/PaymentMethod/PaymentMethod';
import ShippingAddress from '../component/PlaceOrder/ShippingAddress/ShippingAddress';

const PlaceOrder = () => {
    return (
        <div style={{ backgroundColor: "#f1f2f4" }}>
          <Navbar />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box >
              <div className="cart-content">
                <div>
                  <ShippingAddress/>
                  <PaymentMethod/>
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

export default PlaceOrder;