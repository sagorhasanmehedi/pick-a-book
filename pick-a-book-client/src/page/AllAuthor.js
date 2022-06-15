import { Box } from "@mui/material";
import React from "react";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";
import AllAuthorCom from "../component/AllAuthor/AllAuthorCom";

const AllAuthor = () => {
  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "45px" }}
      >
        <Box sx={{ width: "83%" }}>
          <AllAuthorCom />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default AllAuthor;
