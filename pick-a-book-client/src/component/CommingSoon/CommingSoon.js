import { Paper } from "@mui/material";
import React from "react";
import "./CommingSoon.css"
import backgroundImage from "../../assets/images/SL-070723333333333333333333333333330-32260-27.jpg";
import Navbar from "../Navbar/Navbar/Navbar";

const CommingSoon = () => {
  return (
    <div>
      <Navbar />

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: {
            lg: "start",
            xs: "center",
          },
          backgroundColor: "black",
          height: {
            lg: "81vh",
            xs: "87vh",
          },
        }}
      >
       
        <img src={backgroundImage} className="commingsoonimage" alt="" />
      </Paper>
    </div>
  );
};

export default CommingSoon;
