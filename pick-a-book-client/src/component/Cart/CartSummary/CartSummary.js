import React from "react";
import "./CartSummary.css";

const CartSummary = ({ TotalDiscountPrice }) => {
  return (
    <>
      <div className="cartsummary">
        <div className="cartsummary-header-name">
          <p className="cartsummary-header">Checkout Summary</p>
        </div>

        <div className="curtsummary-table-container">
          <table className="curtsummary">
            <tr className="top-border">
              <td>Subtotal</td>
              <td className="text-right">{TotalDiscountPrice} TK.</td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td className="text-right">50 TK.</td>
            </tr>

            <tr>
              <td>Gift Wrap</td>
              <td className="text-right">20 Tk.</td>
            </tr>
            <tr>
              <td>Total</td>
              <td className="text-right">
                {TotalDiscountPrice ? TotalDiscountPrice + 50 + 20 : 0} TK.
              </td>
            </tr>
            <tr>
              <td>Payable Total</td>
              <td className="text-right">
                {TotalDiscountPrice ? TotalDiscountPrice + 50 + 20 : 0} TK.
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="promo-code">
        <p>Add Promo code or Gift voucher </p>
      </div>
    </>
  );
};

export default CartSummary;
