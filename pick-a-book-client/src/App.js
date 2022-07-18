import React from "react";
import { ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { theme } from "./them/Index";

import Home from "./page/Home";
import Login from "./page/Login";
import Catagory from "./page/Catagory";
import Cart from "./page/Cart";
import Layout from "./component/Layout/Layout";
import AllBook from "./page/AllBook";
import AddNewBook from "./page/AddNewBook";
import EditBooks from "./page/AddNewBook";
import MakeAdmin from "./page/MakeAdmin";
import AllOeder from "./page/AllOeder";
import HomeAllBook from "./component/Home/HomeAllBook/HomeAllBook";
import Signup from "./page/Signup";
import AllAuthor from "./page/AllAuthor";
import ViewDetailes from "./page/ViewDetailes";
import PlaceOrder from "./page/PlaceOrder";
import MyAcount from "./component/MyAcount/MyAcount";
import CommingSoon from "./component/CommingSoon/CommingSoon";
import ScrollToTop from "react-scroll-to-top";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AuthProvider from "./Contex/AuthProvider";
import Address from "./page/Address";
import AddressPrivateRout from "./PrivateRoute/AddressPrivateRout";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop color="#0699d5" smooth />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Catagory" element={<Catagory />} />
            <Route
              path="/Cart"
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />

            <Route path="/HomeAllBook/:catagory" element={<HomeAllBook />} />
            <Route path="/AllAuthore" element={<AllAuthor />} />
            <Route path="/ViewDetails/:id" element={<ViewDetailes />} />
            <Route
              path="/PlaceOrder"
              element={
                <AddressPrivateRout>
                  <PlaceOrder />
                </AddressPrivateRout>
              }
            />
            <Route path="/MyAcount" element={<MyAcount />} />
            <Route path="/CommingSoon" element={<CommingSoon />} />
            <Route path="/Address" element={<Address />} />

            <Route path="/Dashbord" element={<Layout />}>
              <Route index element={<AllBook />} />
              <Route path="AllBook" element={<AllBook />} />
              <Route path="addnewbook" element={<AddNewBook />} />
              <Route path="editBook" element={<EditBooks />} />
              <Route path="makeAdmin" element={<MakeAdmin />} />
              <Route path="allOrder" element={<AllOeder />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
