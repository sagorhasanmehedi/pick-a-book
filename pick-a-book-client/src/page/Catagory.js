import React from 'react';
import Navbar from '../component/Navbar/Navbar/Navbar';
import { Box } from '@mui/system';
import Footer from '../component/Footer/Footer';
import BookCatagory from '../component/Catagory/BookCatagory';


const Catagory = () => {



 
    return (


        <div style={{ backgroundColor: "#f1f2f4" }}>
        <Navbar />
        <Box sx={{ display: "flex", justifyContent: "center",marginTop:"45px" }}>
          <Box sx={{ width: "83%" }}>
           <BookCatagory/>
        </Box>
        </Box>
        <Footer />
      </div>
       
    );
};

export default Catagory;