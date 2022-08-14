import { Grid, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import "./PaymentMethod.css";
import cashon from "../../../assets/images/paymentIcon/cash-on.png";
import bikash from "../../../assets/images/paymentIcon/bkash.png";
import nogod from "../../../assets/images/paymentIcon/Nagad-Logo.png";
import ssl from "../../../assets/images/paymentIcon/ssl.png";
import roket from "../../../assets/images/paymentIcon/rocket.png";
import { StyledButton } from "../../../style/MetariulUiStyle";
import Swal from "sweetalert2";

import CashonForm from "../CashonForm/CashonForm";
import StripePaymentForm from "../StripePaymentForm/StripePaymentForm";

const PaymentMethod = ({
  Address,
  Cart,
  TotalDiscountPrice,
  setCart,
  user,
}) => {
  const [Method, setMethod] = useState(null);

  // cashon form modal
  const [openCashOnForm, setOpenopenCashOnForm] = useState(false);

  // stripe pament modal
  const [openStripeForm, setopenStripeForm] = useState(false);

  // handel get method value
  const getMethod = (e) => {
    setMethod(e.target.value);
  };

  // alart for payment not available
  const pymentComingSoon = () => {
    Swal.fire("This payment system is currently unavailable");
  };

  // confirm order
  const handelOderConfirm = () => {
    
    if (Method === "CashOn") {
      setOpenopenCashOnForm(true);
    } else if (Method === "Stripe") {
      setopenStripeForm(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Please Select A Payment Method",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <div className="payment">
        <RadioGroup>
          <div className="payment-method-heading">
            <p>Payment Method </p>

            <span>(Please select only one! payment method)</span>
          </div>

          <div className="payment-items">
            <Grid container rowSpacing={3} columnSpacing={4}>
              <Grid item xs={12} md={6}>
                <div className="payment-item cashOn">
                  <StyledButton
                    value="CashOn"
                    control={<Radio />}
                    onChange={getMethod}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />

                  <img src={cashon} alt="" />
                  <span>Cash on Delivery</span>
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <div className="payment-item ssl">
                  <StyledButton
                    value="Stripe"
                    control={<Radio />}
                    onChange={getMethod}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />

                  <img src={ssl} alt="" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div onClick={pymentComingSoon} className="payment-item nogod">
                  <StyledButton
                    value="disabled"
                    disabled
                    // value="Nagod"
                    // control={<Radio />}
                    // onChange={getMethod}
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />

                  <img src={nogod} alt="" />
                </div>
              </Grid>

              <Grid item xs={12} md={6}>
                <div onClick={pymentComingSoon} className="payment-item bikash">
                  <StyledButton
                    value="disabled"
                    disabled
                   
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />

                  <img src={bikash} alt="" />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <div onClick={pymentComingSoon} className="payment-item roket">
                  <StyledButton
                    value="disabled"
                    disabled
                    
                    sx={{
                      "& .MuiSvgIcon-root": {
                        fontSize: 28,
                      },
                    }}
                  />

                  <img src={roket} alt="" />
                </div>
              </Grid>
            </Grid>
            <div className="payment-worning">
              <p>
                Note: In some cases the price of the book / product in your
                order may change from the publisher / supplier for various
                reasons. Also the book / product of your order may not be with
                the publisher / supplier. We apologize for the inconvenience.
              </p>
            </div>
            <div className="payment-confirm-button">
              {TotalDiscountPrice === undefined ? (
                <button className="payment-Placed-button">Order Placed</button>
              ) : TotalDiscountPrice === 0 ? (
                <button className="payment-Placed-button">Order Placed</button>
              ) : (
                <button onClick={handelOderConfirm}>Confirm Order</button>
              )}
            </div>
          </div>
        </RadioGroup>
      </div>

      <CashonForm
        openCashOnForm={openCashOnForm}
        setOpenopenCashOnForm={setOpenopenCashOnForm}
        Address={Address}
        Cart={Cart}
        setCart={setCart}
        TotalDiscountPrice={TotalDiscountPrice}
        Method={Method}
        user={user}
      />

      <StripePaymentForm
        openStripeForm={openStripeForm}
        setopenStripeForm={setopenStripeForm}
        Address={Address}
        Cart={Cart}
        setCart={setCart}
        TotalDiscountPrice={TotalDiscountPrice}
        Method={Method}
      />
    </>
  );
};

export default PaymentMethod;
