import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CashOnFormModalButton } from "../../../style/MetariulUiStyle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    lg: 430,
    xs: 350,
  },
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

// stripe lodescript
const stripePromise = loadStripe(
  "pk_test_51JvlnWAt5PMdpjXmijl0qzF8yGanGgMdoC8n0xYmLaaNZJ6Nw5pxaHoMvpOFpaHzEKq1XHlqQdCcrMtzTHfIwlnn003ggGAik4"
);

export default function StripePaymentForm({
  openStripeForm,
  setopenStripeForm,

  Address,
  Cart,
  setCart,
  TotalDiscountPrice,
  Method,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openStripeForm}
        // onClose={() => setopenStripeForm(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openStripeForm}>
          <Box sx={style}>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                setopenStripeForm={setopenStripeForm}
                Address={Address}
                Cart={Cart}
                setCart={setCart}
                TotalDiscountPrice={TotalDiscountPrice}
                Method={Method}
              />
            </Elements>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
