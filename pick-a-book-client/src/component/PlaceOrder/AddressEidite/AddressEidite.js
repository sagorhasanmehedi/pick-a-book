import React from "react";


import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import {
  AddressTextAria,
  AddressTextField,
  ModalHeading,
  ModalHeadingCancel,
  ModalHeadingName,
  ModalButton,
} from "../../../style/MetariulUiStyle";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    lg: 400,
    sm:350,
    xs:365
  },
  bgcolor: "background.paper",
  borderRadius: "4px",
  p: 4,
  boxShadow: "0 0 10px 0 rgb(0 0 0 / 50%)",
};

const AddressEidite = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>
        <CreditScoreIcon /> Edit
      </button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <ModalHeading>
              <ModalHeadingName>Shipping Info</ModalHeadingName>
              <ModalHeadingCancel onClick={() => setOpen(false)}>
                Cancle
              </ModalHeadingCancel>
            </ModalHeading>

            <Grid container rowSpacing={4} columnSpacing={2}>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={"Mehedi hasan"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={"8801763553034"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={"+8801763553034"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={"ধানমন্ডি"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={"ঢাকা"} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={"বাংলাদেশ।"} />
              </Grid>
              <Grid item xs={12} md={12}>
                <AddressTextAria
                  defaultValue={"52/A Lake Circus Rd, Dhaka 1205 "}
                />
              </Grid>
            </Grid>
            <ModalButton>Save</ModalButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddressEidite;
