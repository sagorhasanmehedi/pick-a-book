import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../../Hook/UseAuth";
import "./AddAddress.css";

const AddAddress = () => {
  let navigate = useNavigate();
  const [ShipingAddress, setShipingAddress] = useState();
  const {setAddress} = UseAuth()




  // handelsubmit
  const handelSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("Address", JSON.stringify(ShipingAddress));
    setAddress(ShipingAddress)
    navigate(`/PlaceOrder`);
  };
  return (
    <Box className="address-form">
      <h3>Add shipping Address</h3>



      <Box component="form" onSubmit={(e) => handelSubmit(e)}>
        <Grid container rowSpacing={4} columnSpacing={3}>
          <Grid item xs={12} md={6}>
            <label htmlFor="">Full Name</label>
            <input
              required
              name="Full_Name"
              type="text"
              placeholder="Enter your first and last name"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="">Region</label>
            <input
              required
              name="Region"
              type="text"
              placeholder="For Example: Dhaka"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="">Phone Number</label>
            <input
              required
              name="Phone_Number"
              type="text"
              placeholder="Please enter your phone number"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="">City</label>
            <input
              required
              name="City"
              type="text"
              placeholder="For Example: Dhanmondi"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="">Building / House No / Floor / Street</label>
            <input
              required
              name="Building_House_No_Floor_Street"
              type="text"
              placeholder="Enter your"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <label htmlFor="">Area</label>
            <input
              required
              name="Area"
              type="text"
              placeholder="For Example: Dhanmondi 32"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <label htmlFor="">Colony / Suburb / Locality / Landmark</label>
            <input
              name="Colony_Suburb_Locality_Landmark"
              type="text"
              placeholder="Enter your"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <label htmlFor="">Address</label>
            <input
              required
              name="Address"
              type="text"
              placeholder="For Example: House# 123, Street# 123, ABC Road"
              onChange={(e) =>
                setShipingAddress({
                  ...ShipingAddress,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Grid>
        </Grid>

        <div className="address-button">
          <button className="button-cancel">CANCEL</button>
          <button type="submit" className="button-save">
            SAVE
          </button>
        </div>
      </Box>
    </Box>
  );
};

export default AddAddress;
