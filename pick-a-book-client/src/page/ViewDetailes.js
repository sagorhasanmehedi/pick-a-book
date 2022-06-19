import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";
import Details from "../component/ViewDetailes/Details/Details";
import RetingRevive from "../component/ViewDetailes/RetingRevive/RetingRevive";
import SideDetails from "../component/ViewDetailes/SideDetails/SideDetails";

const ViewDetailes = () => {
  const [Book, setBook] = useState({})
  let params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:7000/single/${params.id}`)
      .then((respons) => {
        setBook(respons.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#eff0f5" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "90%", sm: "70%" },
            mt: "20px",
          }}
        >
          <Grid container sx={{ boxShadow: "0px 4px 6px -3px #9c9c9c" }}>
            <Grid item xs={12} sm={12} md={9}>
              <Details Book={Book} />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <SideDetails />
            </Grid>
          </Grid>
          <RetingRevive Book={Book} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ViewDetailes;
