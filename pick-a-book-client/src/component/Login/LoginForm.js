import React from "react";
import "./LoginForm.css";
import { Checkbox, Input, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setData, Data, handelLogin }) => {
  let navigate = useNavigate();

  const handelSingup = () => {
    navigate("/Signup");
  };

  return (
    <Box
      component="form"
      onSubmit={(e) => handelLogin(e)}
      className="login-form"
    >
      <div className="heading-container">
        <p className="signin-heading active">SIGN IN</p>
        <p onClick={handelSingup} className="signup-heading">
          SIGN UP
        </p>
      </div>
      {/* <p className="login-sub-heading">
        Login with your facebook or google account
      </p>

      <div className="login-button">
        <button className="facebook-button">
          <i className="fab fa-facebook-f login-icon-facebook"></i>
          Facebook
        </button>
        <button  className="google-button">
          <i className="fa fa-google login-icon-google" aria-hidden="true"></i>
          Google
        </button>
      </div>
      <p className="social-login-or">OR</p> */}

      <p className="login-text">Login with email or phone number</p>
      <div className="textfield">
        <Input
          sx={{
            width: {
              lg: "75%",
              xs: "100%",
            },
            marginTop: "30px",
          }}
          placeholder="Email"
          startAdornment={
            <InputAdornment>
              <MarkunreadIcon sx={{ marginRight: "10px" }} />
            </InputAdornment>
          }
          name="Email"
          onChange={(e) =>
            setData({
              ...Data,
              [e.target.name]: e.target.value,
            })
          }
        />
        <Input
          sx={{
            width: {
              lg: "75%",
              xs: "100%",
            },
            marginTop: "30px",
          }}
          placeholder="Password"
          startAdornment={
            <InputAdornment>
              <LockIcon sx={{ marginRight: "10px" }} />
            </InputAdornment>
          }
          name="Password"
          onChange={(e) =>
            setData({
              ...Data,
              [e.target.name]: e.target.value,
            })
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
        <button className="signin-button">SIGN IN</button>
      </div>
      <p className="signup-text">
        Don’t have an account? <span onClick={handelSingup}>Sign Up Now!</span>
      </p>
    </Box>
  );
};

export default LoginForm;
