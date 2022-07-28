import React, { useState } from "react";
import { Checkbox, Input, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAuth from "../../Hook/UseAuth";
const axios = require("axios").default;

const SignupForm = () => {
  const [UserInfo, setUserInfo] = useState(null);
  const { setUser } = UseAuth();
  let navigate = useNavigate();

  const handelSignin = () => {
    navigate("/Login");
  };

  let UserData = {
    Full_Name: UserInfo?.Full_Name,
    Email: UserInfo?.Email,
    Mobile_No: UserInfo?.Mobile_No,
    Password: UserInfo?.Password,
    Rool: "User",
  };

  // handel submit
  const handelSubmit = (e) => {
    e.preventDefault();
    if (
      UserInfo?.Full_Name &&
      UserInfo?.Email &&
      UserInfo?.Mobile_No &&
      UserInfo?.Password
    ) {
      axios
        .post("http://pickabook.rpi.gov.bd/users", UserData)
        .then((response) => {
          if (response.data.acknowledged === true) {
            localStorage.setItem("User", JSON.stringify(UserData));
            setUser(UserData);

            Swal.fire({
              icon: "success",
              title: "Signup Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
            setUserInfo("");
            navigate("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Please provide value in each input field !!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="login-form">
      <div className="heading-container">
        <p onClick={handelSignin} className="signin-heading">
          SIGN IN
        </p>
        <p className="signup-heading active">SIGN UP</p>
      </div>
      {/* <p className="login-sub-heading">
        Register fast with your facebook or google
      </p>
      <div className="login-button">
        <button className="facebook-button">
          <i className="fab fa-facebook-f login-icon-facebook"></i>
          Facebook
        </button>
        <button className="google-button">
          <i className="fa fa-google login-icon-google" aria-hidden="true"></i>
          Google
        </button>
      </div>
      <p className="social-login-or">OR</p> */}

      <p className="login-text">Register with your information</p>
      <Box component="form" onSubmit={(e) => handelSubmit(e)}>
        <div className="textfield">
          <Input
            sx={{
              width: {
                lg: "75%",
                xs: "100%",
              },
              marginTop: "30px",
            }}
            placeholder="Full Name"
            name="Full_Name"
            startAdornment={
              <InputAdornment>
                <PersonIcon sx={{ marginRight: "10px" }} />
              </InputAdornment>
            }
            onChange={(e) =>
              setUserInfo({
                ...UserInfo,
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
            placeholder="Email"
            name="Email"
            startAdornment={
              <InputAdornment>
                <MarkunreadIcon sx={{ marginRight: "10px" }} />
              </InputAdornment>
            }
            onChange={(e) =>
              setUserInfo({
                ...UserInfo,
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
            placeholder="Mobile No."
            name="Mobile_No"
            startAdornment={
              <InputAdornment>
                <LocalPhoneIcon sx={{ marginRight: "10px" }} />
              </InputAdornment>
            }
            onChange={(e) =>
              setUserInfo({
                ...UserInfo,
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
            name="Password"
            startAdornment={
              <InputAdornment>
                <LockIcon sx={{ marginRight: "10px" }} />
              </InputAdornment>
            }
            onChange={(e) =>
              setUserInfo({
                ...UserInfo,
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
          <button type="submit" className="signin-button">
            Create Account
          </button>
        </div>
      </Box>
      <p className="signup-text">
        Already have an account? <span onClick={handelSignin}>Signin Now!</span>
      </p>
    </div>
  );
};

export default SignupForm;
