import { Box, Grid } from "@mui/material";
import React from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";
import Details from "../component/ViewDetailes/Details/Details";
import RetingRevive from "../component/ViewDetailes/RetingRevive/RetingRevive";
import SideDetails from "../component/ViewDetailes/SideDetails/SideDetails";

const ViewDetailes = () => {
  return (
    <div style={{ backgroundColor: "#eff0f5" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width:{xs:'90%',sm:'70%'},
            mt: "20px",
            
           
   
          }}
        >
          <Grid container sx={{ boxShadow: "0px 4px 6px -3px #9c9c9c" }}>
            <Grid item xs={12} sm={12} md={9}>
              <Details />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <SideDetails />
            </Grid>
          </Grid>
          <RetingRevive/>
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ViewDetailes;
