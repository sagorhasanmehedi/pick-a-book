// import React, { useEffect, useState } from "react";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import Swal from "sweetalert2";
// import UseAuth from "../../../Hook/UseAuth";
// import "./CheckoutForm.css"

// const CheckoutForm = ({
//   setopenStripeForm,
//   Address,
//   Cart,
//   setCart,
//   TotalDiscountPrice,
//   Method,
// }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [ClientSecret, setClientSecret] = useState("");
//   const { user } = UseAuth();

//   useEffect(() => {
//     // console.log(TotalDiscountPrice)
//     const price = TotalDiscountPrice + 50 + 20;
//     if (!price) {
//       return;
//     }

//     fetch("http://localhost:7000/create-payment-intent", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({ price }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//     //   .then((data) => setClientSecret(data));
//   }, [TotalDiscountPrice]);

//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }

//     // Use your card Element with other Stripe.js APIs
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card,
//     });

//     if (error) {
//       setopenStripeForm(false);
//       Swal.fire({
//         icon: "error",
//         title: error.message,
//       });
//     } else {
//       console.log("[PaymentMethod]", paymentMethod);
//     }

//     // confirm payment
//     const { paymentIntent, error: paymentIntentError } =
//       await stripe.confirmCardPayment(ClientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: Address.Full_Name,
//             email: user.Email,
//           },
//         },
//       });

//     if (paymentIntentError) {
//       setopenStripeForm(false);

//       Swal.fire({
//         icon: "error",
//         title: "Payment Failed",
//         text: "Please try again later",
//       });
//     } else {
//       setCart([]);
//       localStorage.removeItem("Book");
//       setopenStripeForm(false);
//       Swal.fire({
//         icon: "success",
//         title: "Payment Successfull",
//         text: "your order is confirmed",
//       });
//       console.log(paymentIntent);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{

//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//         }}
//       />
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;

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
  const [checkoutError, setCheckoutError] = useState();
  const { user } = UseAuth();

  //   console.log(Address);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  //   const handleCardDetailsChange = (event) => {
  //     event.error ? setCheckoutError(event.error.message) : setCheckoutError();
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(TotalDiscountPrice);
    const price = TotalDiscountPrice + 50 + 20;
    if (!price) {
      Swal.fire({
        icon: "error",
        title: "An Error Occurred Please Try Again Later",
      });
      return;
    }

    const data = await axios
      .post(`http://localhost:7000/create-payment-intent`, { price })
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

      setProcessingTo(true);

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

        setCart([]);
        localStorage.removeItem("Book");
        setopenStripeForm(false);
        Swal.fire({
          icon: "success",
          title: "Payment Successfull",
          text: "your order is confirmed",
        });

        setProcessingTo(false);
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
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={isProcessing || !stripe}>
        Checkout
      </button>
    </form>
  );
};

export default CheckoutForm;
