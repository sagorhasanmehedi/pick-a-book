import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartSummary from "../component/Cart/CartSummary/CartSummary";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";
import PaymentMethod from "../component/PlaceOrder/PaymentMethod/PaymentMethod";
import ShippingAddress from "../component/PlaceOrder/ShippingAddress/ShippingAddress";
import UseAuth from "../Hook/UseAuth";

const PlaceOrder = () => {
  const { Address, user } = UseAuth();
  const [Cart, setCart] = useState();

  // calculet total after discount
  const DiscountPrice = Cart?.map(
    (book) =>
      Math.round(book.price - (book.offer_percentage / 100) * book.price) *
      book.quantity
  );
  let TotalDiscountPrice = DiscountPrice?.reduce((a, b) => {
    return a + b;
  }, 0);

  useEffect(() => {
    const exist = localStorage.getItem("Book");
    const StorState = JSON.parse(exist);
    setCart(StorState);
  }, []);



 





  

  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <div className="cart-content">
            <div>
              <ShippingAddress Address={Address} />
              <PaymentMethod
                Address={Address}
                Cart={Cart}
                TotalDiscountPrice={TotalDiscountPrice}
                setCart={setCart}
                user={user}
              />
            </div>
            <div>
              <CartSummary TotalDiscountPrice={TotalDiscountPrice} />
            </div>
          </div>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
