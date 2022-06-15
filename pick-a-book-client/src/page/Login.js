import { Box } from '@mui/material';
import React from 'react';
import Footer from '../component/Footer/Footer';
import LoginForm from '../component/Login/LoginForm';
import Navbar from '../component/Navbar/Navbar/Navbar';

const Login = () => {
    return (
        <div style={{ backgroundColor: "#f1f2f4"}}>
          <Navbar />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
           
            <LoginForm/>
          </Box>
          <Footer />
        </div>
      );
};

export default Login;