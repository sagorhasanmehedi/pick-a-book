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
    sm: 350,
    xs: 365,
  },
  bgcolor: "background.paper",
  borderRadius: "4px",
  p: 4,
  boxShadow: "0 0 10px 0 rgb(0 0 0 / 50%)",
};

const AddressEidite = ({ Address }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(Address);

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
                <AddressTextField defaultValue={Address?.Full_Name} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={Address?.Phone_Number} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={Address?.Region} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={Address?.City} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField defaultValue={Address?.Area} />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField
                  defaultValue={Address?.Building_House_No_Floor_Street}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <AddressTextAria defaultValue={Address?.Address} />
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
