import { Box } from "@mui/material";
import React from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";
import SignupForm from "../component/Signup/SignupForm";

const Signup = () => {
  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SignupForm />
      </Box>
      <Footer />
    </div>
  );
};

export default Signup;
