import React, { useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PersonIcon from "@mui/icons-material/Person";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Box } from "@mui/system";
import Swal from "sweetalert2";
const axios = require("axios").default;

const MakeAdminForm = ({ setisAdmin, isAdmin }) => {
  const [UserInfo, setUserInfo] = useState(null);

  let UserData = {
    Full_Name: UserInfo?.Full_Name,
    Email: UserInfo?.Email,
    Mobile_No: UserInfo?.Mobile_No,
    Password: UserInfo?.Password,
    Rool: "Admin",
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
        .post("https://pickabook.rpi.gov.bd/users", UserData)
        .then((response) => {
          if (response.data.acknowledged === true) {
            setisAdmin(!isAdmin);

            Swal.fire({
              icon: "success",
              title: " Account Create Successful",
              showConfirmButton: false,
              timer: 1500,
            });
            e.target.reset();
            setUserInfo("");
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
    <Box component="form" onSubmit={(e) => handelSubmit(e)}>
      <div style={{ marginBottom: "30px" }}>
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

      <button type="submit" className="signin-button">
        Create Account
      </button>
    </Box>
  );
};

export default MakeAdminForm;
