import React, { useState } from "react";
import UseAuth from "../../../Hook/UseAuth";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
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
import Swal from "sweetalert2";

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
  const [UpdatedAddress, setUpdatedAddress] = useState();
  const { isAddressChange, setisAddressChange } = UseAuth();

  // handel dubmit
  const handelSubmit = (e) => {
    e.preventDefault();

    if (UpdatedAddress === undefined) {
      handleClose();
      return;
    }
   

    if (
      UpdatedAddress.Full_Name === "" ||
      UpdatedAddress.Phone_Number === "" ||
      UpdatedAddress.Region === "" ||
      UpdatedAddress.City === "" ||
      UpdatedAddress.Area === "" ||
      UpdatedAddress.Building_House_No_Floor_Street === "" ||
      UpdatedAddress.Address === ""
    ) {
      handleClose();
      Swal.fire({
        icon: "error",
        title: "Input Field Cannot Be Empty",
        text: 'Please Enter All The Value',
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    localStorage.setItem("Address", JSON.stringify(UpdatedAddress));
    setisAddressChange(!isAddressChange);
    handleClose();
  };

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
          <Box sx={style} component="form" onSubmit={(e) => handelSubmit(e)}>
            <ModalHeading>
              <ModalHeadingName>Shipping Info</ModalHeadingName>
              <ModalHeadingCancel onClick={() => setOpen(false)}>
                Cancle
              </ModalHeadingCancel>
            </ModalHeading>

            <Grid container rowSpacing={4} columnSpacing={2}>
              <Grid item xs={12} md={6}>
                <AddressTextField
                  defaultValue={Address?.Full_Name}
                  name="Full_Name"
                  onChange={(e) =>
                    setUpdatedAddress({
                      ...Address,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField
                  defaultValue={Address?.Phone_Number}
                  name="Phone_Number"
                  onChange={(e) =>
                    setUpdatedAddress({
                      ...Address,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField
                  defaultValue={Address?.Region}
                  name="Region"
                  onChange={(e) =>
                    setUpdatedAddress({
                      ...Address,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField
                  defaultValue={Address?.City}
                  name="City"
                  onChange={(e) =>
                    setUpdatedAddress({
                      ...Address,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField
                  defaultValue={Address?.Area}
                  name="Area"
                  onChange={(e) =>
                    setUpdatedAddress({
                      ...Address,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <AddressTextField
                  defaultValue={Address?.Building_House_No_Floor_Street}
                  name="Building_House_No_Floor_Street"
                  onChange={(e) =>
                    setUpdatedAddress({
                      ...Address,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <AddressTextAria
                  defaultValue={Address?.Address}
                  name="Address"
                  onChange={(e) =>
                    setUpdatedAddress({
                      ...Address,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
            </Grid>
            <ModalButton type="submit">Save</ModalButton>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddressEidite;
