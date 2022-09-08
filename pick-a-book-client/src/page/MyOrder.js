import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../component/Footer/Footer";
import MyAllOrder from "../component/MyOrder/MyAllOrder";
import Navbar from "../component/Navbar/Navbar/Navbar";
import UseAuth from "../Hook/UseAuth";

const MyOrder = () => {
  const [Orders, setOrders] = useState([]);

  const { user } = UseAuth();

  useEffect(() => {
    axios
      .get(`https://bookwebsite.wiztecbd.online/allOrder/${user?.Email}`)
      .then((response) => {
        // handle success
        setOrders(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [user]);



  return (
    <div style={{ backgroundColor: "#eff0f5" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "90%", lg: "65%" },
            mt: "20px",
          }}
        >
          <MyAllOrder Orders={Orders} user={user} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default MyOrder;
