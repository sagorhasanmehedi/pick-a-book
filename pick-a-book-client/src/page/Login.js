import { Box } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../component/Footer/Footer";
import LoginForm from "../component/Login/LoginForm";
import Navbar from "../component/Navbar/Navbar/Navbar";
import UseAuth from "../Hook/UseAuth";

const Login = () => {
  const [Data, setData] = useState();
  const { setUser } = UseAuth();

  let navigate = useNavigate();
  const location = useLocation();
  const redirect_URL = location?.state?.from?.pathname || "/";




  // handel login
  const handelLogin = (e) => {
   e.preventDefault();
    console.log(Data.Email);

    axios
      .get(`http://localhost:7000/login/${Data.Email}`)
      .then((response) => {
        console.log(response);
        if (response.data.Email) {
          if (response.data.Password === Data.Password) {
            localStorage.setItem("User", JSON.stringify(response.data));
            setUser(response.data);

            e.target.reset();
            navigate(redirect_URL)
          } else {
            Swal.fire({
              icon: "error",
              title: "Password Not Match !!!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          Swal.fire({
            icon: "error",
            title: "User Doesn't Exist !!!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })

      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LoginForm setData={setData} Data={Data} handelLogin={handelLogin} />
      </Box>
      <Footer />
    </div>
  );
};

export default Login;
