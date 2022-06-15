import React from "react";
import "./SideDetails.css";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import ReplayIcon from "@mui/icons-material/Replay";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ForumIcon from "@mui/icons-material/Forum";

const SideDetails = () => {
  return (
    <>
      <div className="side-details">
        <div className="side-details-info">
          <CreditScoreIcon /> <p>Cash On Delivery</p>
        </div>
        <div className="side-details-info">
          <ReplayIcon /> <p>7 Days Happy Return</p>
        </div>
        <div className="side-details-info">
          <LocalShippingIcon />
          <p>
            Delivery Charge Tk.
            <br /> 50(Online Order)
          </p>
        </div>
        <div className="side-details-info">
          <AccountBalanceWalletIcon /> <p>Purchase & Earn;</p>
        </div>
        <div></div>
      </div>
      <div className="saller-details">
        <div className="saller-info">
          <div>
            <p className="saller-name-title">Sold by</p>
            <p className="saller-name">Dot Books</p>
          </div>
          <div className="chat">
            <ForumIcon
              sx={{
                width: "13px",
                height: "13px",
              }}
            />
            <p>CHAT</p>
          </div>
        </div>
        <div className="saller-table">
          <div className="saller-table-sell first">
            <p>Positive Seller Ratings</p>
            <p className="saller-parsentage">97%</p>
          </div>
          <div className="saller-table-sell">
            <p>Ship on Time</p>
            <p className="saller-parsentage">88%</p>
          </div>
          <div className="saller-table-sell">
            <p>Chat Response Rate</p>
            <p className="saller-parsentage">100%</p>
          </div>
        </div>
        <div className="saller-visit">
          <p className="saller-visit-link">Visit Store</p>
        </div>
      </div>
    </>
  );
};

export default SideDetails;
