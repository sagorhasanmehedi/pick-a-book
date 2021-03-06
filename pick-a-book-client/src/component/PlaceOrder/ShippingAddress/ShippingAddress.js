import { Grid } from "@mui/material";
import React from "react";
import "./ShippingAddress.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddressEidite from "../AddressEidite/AddressEidite";
import Swal from "sweetalert2";
import UseAuth from "../../../Hook/UseAuth";
import { useNavigate } from "react-router-dom";

const ShippingAddress = ({ Address }) => {
  let navigate = useNavigate();
  const { isAddressChange, setisAddressChange } = UseAuth();
 

  // handel address delete
  const handleaItemDeleteOrder = () => {
    localStorage.removeItem("Address");
    setisAddressChange(!isAddressChange)
    navigate("/Address");
    
    
    
  };

  return (
    <div className="shiping-addres">
      <div className="shiping-addres-heading">
        <h3>Shipping Address</h3>
      </div>

      <div className="addres">
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="addres-name">{Address?.City}</h3>
          </Grid>
          <Grid
            item
            md={5}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <p className="highlight">{Address?.Full_Name}</p>
              <p className="highlight">{Address?.Phone_Number}</p>
              <p>{Address?.Area}</p>
              <p>{Address?.Address}</p>
            </div>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="addres-button">
              <AddressEidite Address={Address} />
              <button onClick={handleaItemDeleteOrder}>
                <DeleteForeverOutlinedIcon /> Delet
              </button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ShippingAddress;
