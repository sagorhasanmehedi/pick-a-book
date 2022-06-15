import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./ShippingAddress.css";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddressEidite from "../AddressEidite/AddressEidite";
import Swal from "sweetalert2";

const ShippingAddress = () => {
  const [Address, SetAddress] = useState([]);

  const address = [
    {
      addressHeading: "ধানমন্ডি",
      name: "Name: Mehedi hasan",
      phoneNumber: "Phone: 8801763553034, +8801763553034",
      strteHouse: "52/A Lake Circus Rd, Dhaka 1205 ",
      area: "ধানমন্ডি , ঢাকা, বাংলাদেশ।",
      id: 1,
    },
    {
      addressHeading: "ধানমন্ডি",
      name: "Name: Mehedi hasan",
      phoneNumber: "Phone: 8801763553034, +8801763553034",
      strteHouse: "52/A Lake Circus Rd, Dhaka 1205 ",
      area: "ধানমন্ডি , ঢাকা, বাংলাদেশ।",
      id: 2,
    },
   
  ];

  useEffect(() => {
    SetAddress(address);
  }, []);

  // handleaItemDeleteOrder
  const handleaItemDeleteOrder = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to delete the address ?`,

      showCancelButton: true,
      confirmButtonColor: "Crimson",
      cancelButtonColor: " LightSeaGreen",
      confirmButtonText: "Delete",
    }).then((result) => {
     
      if (result.value) {
        const items = Address.filter((add) => add.id !== id);
        SetAddress(items);
        
        console.log(items );
       
      }
    });
  };

  return (
    <div className="shiping-addres">
      <div className="shiping-addres-heading">
        <h3>Shipping Address</h3>
      </div>

      {Address.map((ADD) => (
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
              <h3 className="addres-name">{ADD.addressHeading}</h3>
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
                <p className="highlight">{ADD.name}</p>
                <p className="highlight">{ADD.phoneNumber}</p>
                <p>{ADD.strteHouse}</p>
                <p>{ADD.area}</p>
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
                <AddressEidite />
                <button onClick={() => handleaItemDeleteOrder(ADD.id)}>
                  <DeleteForeverOutlinedIcon /> Delet
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
};

export default ShippingAddress;
