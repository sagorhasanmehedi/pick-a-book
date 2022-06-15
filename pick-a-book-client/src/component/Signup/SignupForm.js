import React from "react";

import { Checkbox, Input, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  let navigate = useNavigate();


  const handelSignin = () => {
      console.log("first")
    navigate("/Login");
  };


  
  return (
    <div className="login-form">
      
      <div className="heading-container">
        <p onClick={handelSignin} className="signin-heading">SIGN IN</p>
        <p  className="signup-heading active">SIGN UP</p>
      </div>
      <p className="login-sub-heading">
      Register fast with your facebook or google
      </p>
      <div className="login-button">
        <button className="facebook-button">
          <i className="fab fa-facebook-f login-icon-facebook"></i>
          Facebook
        </button>
        <button className="google-button">
          <i class="fa fa-google login-icon-google" aria-hidden="true"></i>
          Google
        </button>
      </div>
      <p className="social-login-or">OR</p>

      <p className="login-text">Register with your information</p>
      <div className="textfield">
        <Input
          style={{ width: "75%", marginTop: "30px" }}
          placeholder="Full Name"
          startAdornment={
            <InputAdornment>
              <PersonIcon sx={{ marginRight: "10px" }} />
            </InputAdornment>
          }
        />
        <Input
          style={{ width: "75%", marginTop: "30px" }}
          placeholder="Email or Phone"
          startAdornment={
            <InputAdornment>
              <MarkunreadIcon sx={{ marginRight: "10px" }} />
            </InputAdornment>
          }
        />
        <Input
          style={{ width: "75%", marginTop: "30px" }}
          placeholder="Mobile No."
          startAdornment={
            <InputAdornment>
              <LocalPhoneIcon sx={{ marginRight: "10px" }} />
            </InputAdornment>
          }
        />
        <Input
          style={{ width: "75%", marginTop: "30px" }}
          placeholder="Password"
     
          startAdornment={
            <InputAdornment>
              <LockIcon sx={{ marginRight: "10px" }} />
            </InputAdornment>
          }
        />
      </div>
      <div className="remember-password">
        <Box sx={{ marginLeft: "-10px" }}>
          <Checkbox />
          <p className="remember">Remember Me </p>
        </Box>

        <p className="forgot-password">Forgot Password?</p>
      </div>
      <div className="signin-button-container">
        <button className="signin-button">Create Account</button>
      </div>
      <p className="signup-text">
      Already have an account? <span onClick={handelSignin}>Signin Now!</span>
      </p>
    </div>
  );
};

export default SignupForm;
