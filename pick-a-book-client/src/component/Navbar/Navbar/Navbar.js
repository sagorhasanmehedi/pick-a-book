import React from "react";
import "./Navbar.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import HomeSubnav from "../HomeSubnav/HomeSubnav";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const settings = [
    {
      text: "My Account",
      link: "/MyAcount",
    },
    {
      text: "My Orders",
      link: "/CommingSoon",
    },
    {
      text: "My Wishlist",
      link: "/CommingSoon",
    },
    {
      text: "Sign Out",
      link: "/CommingSoon",
    },
  ];

  const handleCloseUserMenu = (link) => {
    navigate(link);
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const cond = 1;

  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />

        <div className="nav-header">
          <div
            onClick={() => {
              navigate("/");
            }}
            className="nav-title"
          >
            Pick A Book
          </div>

          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: {
                lg: 455,

                xs: 349,
              },
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Book By Name"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>

            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>
        </div>

        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/catagory">Catagory</Link>
          <Link to="/Cart">Cart</Link>
          <Link to="/Dashbord">Dashbord</Link>
          <Link to="/">Home</Link>

          {cond === 1 ? (
            <Link to="/Login">Login</Link>
          ) : (
            <Box
              sx={{
                display: "inline",
                ml: {
                  lg: 1.5,
                  sm: 3,
                  xs: 3,
                },
              }}
            >
              <Box sx={{ display: "inline" }}>
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, cursor: "pointer" }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleCloseUserMenu(setting.link)}
                    >
                      <Typography textAlign="center">{setting.text}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Box>
          )}
        </div>
      </div>

      <HomeSubnav />
    </>
  );
};

export default Navbar;
