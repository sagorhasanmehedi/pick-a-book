import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import UseAuth from "../../Hook/UseAuth";
import { MyAcountInfo, MyAcountInput } from "../../style/MetariulUiStyle";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar/Navbar";
import profilepic from "../../assets/images/man-profile-cartoon_18591-58482.webp";

const MyAcount = () => {
  const { user } = UseAuth();

  console.log(user);

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
                display: "inline-block",
              }}
            >
              Personal Information
            </Typography>
            <Typography
              sx={{
                marginLeft: "20px",
                fontSize: "16px",

                display: "inline-block",
                cursor: "pointer",
                color: "#0397d3",
              }}
            >
              Change Information
            </Typography>
          </Box>

          <MyAcountInfo>Name</MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value={user?.Full_Name}
            variant="outlined"
          />

          <MyAcountInfo>Email Address </MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value={user?.Email}
            variant="outlined"
          />

          <MyAcountInfo>Mobile number</MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value={user?.Mobile_No}
            variant="outlined"
          />

          <MyAcountInfo>Your Date of Birth</MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value="Not found"
            variant="outlined"
          />

          <MyAcountInfo>Gender</MyAcountInfo>
          <MyAcountInput
            id="outlined-basic"
            value="Not found"
            variant="outlined"
          />

          <MyAcountInfo>Profile picture</MyAcountInfo>

          <CardMedia
            component="img"
            sx={{ height: "100px", width: "100px", borderRadius: "50%" }}
            image={profilepic}
            alt="profile image"
          />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default MyAcount;
