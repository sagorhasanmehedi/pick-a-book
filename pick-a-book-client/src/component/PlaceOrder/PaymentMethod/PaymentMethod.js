import {
 
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import "./PaymentMethod.css";
import cashon from "../../../assets/images/paymentIcon/cash-on.png";
import bikash from "../../../assets/images/paymentIcon/bkash.png";
import nogod from "../../../assets/images/paymentIcon/Nagad-Logo.png";
import ssl from "../../../assets/images/paymentIcon/ssl.png";
import roket from "../../../assets/images/paymentIcon/rocket.png";
import { StyledButton } from "../../../style/MetariulUiStyle";

const PaymentMethod = () => {
  // handel get method value
  const getMethod = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="payment">
      <RadioGroup>
        <div className="payment-method-heading">
          <p>
            Payment Method <span>(Please select only one! payment method)</span>
          </p>
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
              <div className="payment-item nogod">
                <StyledButton
                  value="Nagod"
                  control={<Radio />}
                  onChange={getMethod}
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
              <div className="payment-item ssl">
                <StyledButton
                  value="Ssl"
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
              <div className="payment-item bikash">
                <StyledButton
                  value="Bikash"
                  control={<Radio />}
                  onChange={getMethod}
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
              <div className="payment-item roket">
                <StyledButton
                  value="Roket"
                  control={<Radio />}
                  onChange={getMethod}
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
              Note: In some cases the price of the book / product in your order
              may change from the publisher / supplier for various reasons. Also
              the book / product of your order may not be with the publisher /
              supplier. We apologize for the inconvenience.
            </p>
          </div>
          <div className="payment-confirm-button">
            <button>Confirm Order</button>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PaymentMethod;
