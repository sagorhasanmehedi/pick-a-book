import React from "react";
import "./CartHeader.css";

const CartHeader = ({sum ,TotalDiscountPrice,Cart}) => {






  return (
    <div className="cart-header">
      <label className="header-amount">Select Total ({Cart?.length} Items)</label>
      <p className="header-price">
        Total: <strike className="main-price">{sum} Tk.</strike>
        <span className="offer-price"> {TotalDiscountPrice} Tk.</span>
      </p>
    </div>
  );
};

export default CartHeader;
