import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { CashOnFormModalButton } from "../../../style/MetariulUiStyle";
import Swal from "sweetalert2";
import axios from "axios";

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

export default function CashonForm({
  openCashOnForm,
  setOpenopenCashOnForm,
  Address,
  Cart,
  setCart,
  TotalDiscountPrice,
  Method,
  user,
}) {
 

  // confirm order
  const handelOderConmfirm = () => {
   

    // collect all order information
    const orderDetails = {
      email:user?.Email,
      pamyentMethod: Method,
      totalAmount: TotalDiscountPrice + 50 + 20,
      status: "Pending",
      PlacedDate: new Date().toLocaleString(),
      Address,
      Cart,
    };

    axios
      .post("https://pickabook.rpi.gov.bd/order", {
        details: orderDetails,
      })
      .then((response) => {
        if (response.data.acknowledged === true) {
          Swal.fire(
            "Your Order Is Confirmed",
            "we,ll send a shipping confirmation email as soon as your order ships",
            "success"
          );
          setOpenopenCashOnForm(false);
          setCart([]);
          localStorage.removeItem("Book");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openCashOnForm}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openCashOnForm}>
          <Box sx={style}>
            <Typography variant="h6" component="h2">
              Shipping Address
            </Typography>
            <Typography>{Address?.Full_Name}</Typography>
            <Typography>{Address?.Phone_Number}</Typography>
            <Typography>
              {Address?.Address}, {Address?.Area}, {Address?.Region}
            </Typography>

            <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
              Order Summary
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Items Total ({Cart?.length} Items)</Typography>
              <Typography>৳ {TotalDiscountPrice}</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Shipping Fee </Typography>
              <Typography>৳ 50</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Gift Wrap</Typography>
              <Typography>৳ 20</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Total</Typography>
              <Typography sx={{ color: "#f57224" }}>
                ৳ {TotalDiscountPrice + 50 + 20}
              </Typography>
            </Box>

            <Box sx={{ mt: 6 }}>
              <CashOnFormModalButton
                sx={{
                  backgroundColor: "#f57224",
                  "&:hover": {
                    backgroundColor: "#bc4e0d",
                  },
                }}
                onClick={() => setOpenopenCashOnForm(false)}
              >
                Cancel
              </CashOnFormModalButton>
              <CashOnFormModalButton
                sx={{
                  backgroundColor: "#33c24d",
                  "&:hover": {
                    backgroundColor: "#098c21",
                  },
                  float: "right",
                }}
                onClick={handelOderConmfirm}
              >
                Confirm
              </CashOnFormModalButton>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
