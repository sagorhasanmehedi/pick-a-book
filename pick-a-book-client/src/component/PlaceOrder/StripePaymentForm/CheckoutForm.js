import React, { useMemo, useState } from "react";
import "./CheckoutForm.css";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import useResponsiveFontSize from "./useResponsiveFontSize";
import Swal from "sweetalert2";
import UseAuth from "../../../Hook/UseAuth";
import { CashOnFormModalButton } from "../../../style/MetariulUiStyle";
import { Box } from "@mui/material";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Roboto, Source Code Pro, monospace, SFUIDisplay",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const CheckoutForm = ({
  setopenStripeForm,
  Address,
  Cart,
  setCart,
  TotalDiscountPrice,
  Method,
}) => {
  const [isProcessing, setProcessingTo] = useState(false);

  const { user } = UseAuth();


  

  //   console.log(Address);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const price = TotalDiscountPrice + 50 + 20;
    if (!price) {
      Swal.fire({
        icon: "error",
        title: "An Error Occurred Please Try Again Later",
      });
      return;
    }

    setProcessingTo(true);
    const data = await axios
      .post(`http://pickabook.rpi.gov.bd/create-payment-intent`, { price })
      .then((response) => response.data)
      .catch((error) => console.log({ error }));

    if (data.clientSecret) {
      // your billing details object looks like this
      const billingDetails = {
        name: Address.Full_Name,
        email: user.Email,
        address: {
          city: Address.Region,
          state: Address.City,
        },
      };

      const cardElement = elements.getElement(CardNumberElement);

      try {
        const paymentMethodReq = await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: billingDetails,
        });

        if (paymentMethodReq.error) {
          setopenStripeForm(false);
          Swal.fire({
            icon: "error",
            title: paymentMethodReq.error.message,
          });

          setProcessingTo(false);
          return;
        }

        const confirmedCardPayment = await stripe.confirmCardPayment(
          data.clientSecret,
          {
            payment_method: paymentMethodReq.paymentMethod.id,
          }
        );

        if (confirmedCardPayment.error) {
          setopenStripeForm(false);
          Swal.fire({
            icon: "error",
            title: confirmedCardPayment.error,
          });

          setProcessingTo(false);
          return;
        }

        // collect all order information
        const orderDetails = {
          email: user?.Email,
          pamyentMethod: Method,
          stripePaymenId: confirmedCardPayment.paymentIntent.id,
          PlacedDate: new Date().toLocaleString(),
          totalAmount: TotalDiscountPrice + 50 + 20,
          status: "Pending",
          Address,
          Cart,
        };

        axios
          .post("http://pickabook.rpi.gov.bd/order", {
            details: orderDetails,
          })
          .then((response) => {
            if (response.data.acknowledged === true) {
              setopenStripeForm(false);
              setCart([]);
              localStorage.removeItem("Book");

              Swal.fire({
                icon: "success",
                title: "Payment Successfull",
                text: "your order is confirmed",
              });
              setProcessingTo(false);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (err) {
        setopenStripeForm(false);
        Swal.fire({
          icon: "error",
          title: err.message,
        });
      }
    } else {
      console.log("Error: Server could not initiate the payment process.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <label>
        <span>Card number</span>
        <CardNumberElement
          options={options}
          //   onChange={handleCardDetailsChange}
        />
      </label>
      <label>
        <span>Expiration date</span>

        <CardExpiryElement
          options={options}
          //   onChange={handleCardDetailsChange}
        />
      </label>
      <label>
        <span>CVC</span>
        <CardCvcElement
          options={options}
          // onChange={handleCardDetailsChange}
        />
      </label>

      {/* {!checkoutError && <CheckoutError>{checkoutError}</CheckoutError>} */}

      <Box sx={{ mt: 6 }}>
        <CashOnFormModalButton
          onClick={() => setopenStripeForm(false)}
          sx={{
            backgroundColor: "#f57224",
            "&:hover": {
              backgroundColor: "#bc4e0d",
            },
          }}
        >
          Cancel
        </CashOnFormModalButton>
        <CashOnFormModalButton
          disabled={isProcessing || !stripe}
          type="submit"
          sx={{
            backgroundColor: "#33c24d",
            "&:hover": {
              backgroundColor: "#098c21",
            },
            float: "right",
          }}
        >
          Checkout
        </CashOnFormModalButton>
      </Box>
      {/* <button type="submit" disabled={isProcessing || !stripe}>
        Checkout
      </button> */}
    </Box>
  );
};

export default CheckoutForm;
