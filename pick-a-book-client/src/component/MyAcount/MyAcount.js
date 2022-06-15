import { Box, CardMedia, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { MyAcountInfo, MyAcountInput } from "../../style/MetariulUiStyle";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar/Navbar";

const MyAcount = () => {
  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "45px" }}
      >
        <Box
          sx={{
            width: {
              lg: "40%",
              xs: "90%",
            },
            marginTop: "20px",
            backgroundColor: "#ffffff",
            boxShadow: "0px 4px 6px -3px #9c9c9c",
            borderRadius: "3px",
            padding: "30px",
            borderTop: "2px solid #33c24d",

            paddingTop: 0,
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid #dee2e6 !important",
              marginBottom: "25px",
            }}
          >
            <Typography
              sx={{
                padding: "25px 0",
                fontSize: "21px",
                color: "#333333",
                display:"inline-block"
              }}
            >
              Personal Information
            </Typography >
            <Typography sx={{
               marginLeft:"20px",
                fontSize: "16px",
               
                display:"inline-block",
                cursor: "pointer",
                color: "#0397d3"
                
              }}>Change Information</Typography>
          </Box>

          <MyAcountInfo>Name</MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value="Mehedi Hasan"
            variant="outlined"
          />

          <MyAcountInfo>Your Date of Birth</MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value="27-12-1995"
            variant="outlined"
          />

          <MyAcountInfo>Gender</MyAcountInfo>
          <MyAcountInput id="outlined-basic" value="Male" variant="outlined" />

          <MyAcountInfo>Mobile number</MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value="+88 01763553034"
            variant="outlined"
          />

          <MyAcountInfo>Email Address </MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value="mehedihashnsagor1995@gmail.com"
            variant="outlined"
          />

         
              <MyAcountInfo>Profile picture</MyAcountInfo>

              <CardMedia
                component="img"
                sx={{ height: "100px", width: "100px", borderRadius: "50%"}}
                image="https://lh3.googleusercontent.com/a-/AOh14GjLfnDJPGZR0ZqPGNYFPjbFelPlYaJV_Kb5Pzhx=s96-c"
                alt="profile image"
              />
        
          
              
          
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default MyAcount;
