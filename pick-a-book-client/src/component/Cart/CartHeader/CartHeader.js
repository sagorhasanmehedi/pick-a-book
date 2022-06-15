import React from "react";
import "./CartHeader.css";

const CartHeader = () => {
  return (
    <div className="cart-header">
      <label className="header-amount">Select Total ( 3 Items)</label>
      <p className="header-price">
        Total: <strike className="main-price">45,590Tk.</strike>
        <span className="offer-price"> 43,610 Tk.</span>
      </p>
    </div>
  );
};

export default CartHeader;
