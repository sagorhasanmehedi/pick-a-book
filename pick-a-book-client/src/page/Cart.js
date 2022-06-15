import { Box } from "@mui/material";
import React from "react";
import CartHeader from "../component/Cart/CartHeader/CartHeader";
import CartItem from "../component/Cart/CartItem/CartItem";
import CartSummary from "../component/Cart/CartSummary/CartSummary";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";

const Cart = () => {
  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box >
          <div className="cart-content">
            <div>
              <CartHeader />
              <CartItem />
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

export default Cart;
