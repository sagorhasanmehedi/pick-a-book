import React, { useEffect, useState } from "react";
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
import UseAuth from "../../../Hook/UseAuth";
const axios = require("axios").default;

const Navbar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [Book, setBook] = useState([]);
  const [searchBook, setsearchBook] = useState([]);
  let navigate = useNavigate();
  const { user, setUser } = UseAuth();

  const HandelSingout = (link) => {
    setUser(null);
    localStorage.removeItem("User");
    navigate(link);
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = (link) => {
    navigate(link);
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // all book for searching
  useEffect(() => {
    axios
      .get("https://pick-a-book-server.wiztecbd.online/get_all_book")
      .then((response) => {
        // handle success
        setBook(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  const handleSearchFilter = (e) => {
    const searchword = e.target.value;

    if (searchword === "") {
      setsearchBook([]);
      return;
    }

    const newFilter = Book?.filter((value) =>
      value.book_name.toLowerCase().includes(searchword.toLowerCase())
    );
    setsearchBook(newFilter);
  };

  // view book details
  const handelBookDetails = (id) => {
    navigate(`/ViewDetails/${id}`);
    document.getElementById("searchInput").value = "";

    setsearchBook([]);
  };

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

          <div className="search-bar">
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: {
                  lg: "192%",

                  xs: "121%",
                },
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Book By Name"
                inputProps={{ "aria-label": "search google maps" }}
                onChange={(e) => handleSearchFilter(e)}
                id="searchInput"
              />

              <IconButton sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>

              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="directions"
              ></IconButton>
            </Paper>
            <div className="searchBook">
              {searchBook.map((B) => (
                <div className="each-book">
                  <img src={B.image} alt="" srcset="" />

                  <div onClick={() => handelBookDetails(B._id)}>
                    <p className="title">{B.book_name}</p>
                    <p className="author">{B.author_name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          {user?.Rool === "Admin" && <Link to="/Dashbord">Dashbord</Link>}
          <Link to="/">Home</Link>

          {user?.Email ? (
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
                  <Avatar alt="Semy Sharp" src="/" />
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
                  <MenuItem onClick={() => handleCloseUserMenu("/MyAcount")}>
                    <Typography textAlign="center">My Account</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseUserMenu("/MyOrder")}>
                    <Typography textAlign="center">My Orders</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => handleCloseUserMenu("/CommingSoon")}>
                    <Typography textAlign="center">My Wishlist</Typography>
                  </MenuItem>
                  <MenuItem onClick={() => HandelSingout("/")}>
                    <Typography textAlign="center">Sign Out</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          ) : (
            <Link to="/Login">Login</Link>
          )}
        </div>
      </div>

      <HomeSubnav />
    </>
  );
};

export default Navbar;
