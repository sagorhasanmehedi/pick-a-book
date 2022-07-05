import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CartHeader from "../component/Cart/CartHeader/CartHeader";
import CartItem from "../component/Cart/CartItem/CartItem";
import CartSummary from "../component/Cart/CartSummary/CartSummary";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";
import UseAuth from "../Hook/UseAuth";

const Cart = () => {
  const [Cart, setCart] = useState();
  const { IsBookRemove, setIsBookRemove } = UseAuth();

  // calculet total book price
  const TotalPrice = Cart?.map((book) => book.price * book.quantity);
  let sum = TotalPrice?.reduce((a, b) => {
    return a + b;
  }, 0);

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
  }, [IsBookRemove]);

  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <div className="cart-content">
            <div>
              <CartHeader sum={sum} TotalDiscountPrice={TotalDiscountPrice} Cart={Cart} />
              <CartItem
                Cart={Cart}
                setIsBookRemove={setIsBookRemove}
                IsBookRemove={IsBookRemove}
              />
            </div>
            <div>
              <CartSummary TotalDiscountPrice={TotalDiscountPrice}/>
            </div>
          </div>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Cart;
