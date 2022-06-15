import React from "react";
import "./LoginForm.css";
import { Checkbox, Input, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  let navigate = useNavigate();

  const handelSingup = () => {
    console.log("first");
    navigate("/Signup");
  };

  return (
    <div className="login-form">
      <div className="heading-container">
        <p className="signin-heading active">SIGN IN</p>
        <p onClick={handelSingup} className="signup-heading">
          SIGN UP
        </p>
      </div>
      <p className="login-sub-heading">
        Login with your facebook or google account
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

      <p className="login-text">Login with your email or phone number</p>
      <div className="textfield">
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
        <button className="signin-button">SIGN IN </button>
      </div>
      <p className="signup-text">
        Don’t have an account? <span onClick={handelSingup}>Sign Up Now!</span>
      </p>
    </div>
  );
};

export default LoginForm;
