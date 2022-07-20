import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import { CashOnFormModalButton } from "../../../style/MetariulUiStyle";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      lg: 430,
      xs:350
     
    },
    bgcolor: "background.paper",
  
    boxShadow: 24,
    p: 4,
  };;

export default function StripePaymentForm({
  openStripeForm,
  setopenStripeForm,
}) {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openStripeForm}
        onClose={() => setopenStripeForm(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openStripeForm}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

            <Box sx={{ mt: 6 }}>
              <CashOnFormModalButton
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
                sx={{
                  backgroundColor: "#33c24d",
                  "&:hover": {
                    backgroundColor: "#098c21",
                  },
                  float: "right",
                }}
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
