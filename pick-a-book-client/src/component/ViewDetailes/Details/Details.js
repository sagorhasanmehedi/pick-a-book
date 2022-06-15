import { Grid } from "@mui/material";
import React from "react";
import "./Details.css";

import StarPurple500SharpIcon from "@mui/icons-material/StarPurple500Sharp";
import StarHalfSharpIcon from "@mui/icons-material/StarHalfSharp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Details = () => {
  return (
    <div className="detais">
      <Grid container  columnSpacing={7}>
        <Grid
          item
          xs={12}
          md={4}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "center",

          }}
        >
          <div className="book-image">
          <img
            src="https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/rokimg_20140709_9618.GIF"
            alt=""
          />
          </div>
        </Grid>
        <Grid item xs={12} md={8} sm={12}>
          <div className="book-info">
            <h1>
              বিসিএস নাকি বিদেশে উচ্চশিক্ষা?{" "}
              <span className="book-cover-type">(হার্ডকভার)</span>
            </h1>
            <p className="book-sub-heading">
              বিশ্ববিদ্যালয়-গ্রাজুয়েট, মাদ্রাসা-ছাত্র, গার্ডিয়ান ও শিক্ষকদের
              জন্য দিক-নির্দেশনা।
            </p>
            <p className="details-author-name">
              by<span>ড.মোহাম্মদ সরোয়ার হোসেন</span>
            </p>
            <p className="details-catagory-name">
              Category:<span>ক্যারিয়ার উন্নয়ন</span>
            </p>
            <div className="details-retaing">
              <StarPurple500SharpIcon
                sx={{ color: "#ff9900", width: "22px" }}
              />
              <StarPurple500SharpIcon
                sx={{ color: "#ff9900", width: "22px" }}
              />
              <StarPurple500SharpIcon
                sx={{ color: "#ff9900", width: "22px" }}
              />
              <StarPurple500SharpIcon
                sx={{ color: "#ff9900", width: "22px" }}
              />
              <StarHalfSharpIcon sx={{ color: "#ff9900", width: "22px" }} />
              <span>6 Reting / 10 Review</span>
            </div>
            <div className="price">
              <strike className="price-stark">TK. 260 </strike>
              <span>TK. 216</span>
              <span className="price-save-title">You Save TK. 44</span>
            </div>
            <p className="offer">
              Offers:
              <span>
                আজ ২৯ মে, রাত ৯টা - ১১টা ৫৯৯৳+ বই অর্ডার করলেই ডেলিভারি চার্জ
                মাত্র ২৯৳*
              </span>
            </p>
            <p className="stock">
            <CheckCircleOutlineIcon sx={{ marginRight: "7px",color:"#33c24d" }}/>  In Stock
              <span>(only 1 copies left)</span>
            </p>
            <p className="stock-alart">* স্টক আউট হওয়ার আগেই অর্ডার করুন</p>

            <div className="buttomn-container">
              <button className="pore-dekhun-buttomn"> একটু পড়ে দেখুন </button>
              <button className="Add-to-Cart-button">
                <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Add to Cart
              </button>
            </div>
            <div className="buttomn-container">
              <button className="Booklist-buttomn">
                <FavoriteBorderIcon sx={{ marginRight: "5px" }} />
                Add to Booklist
              </button>
              <button className="Share-button">
                <ShareIcon sx={{ marginRight: "5px" }} />
                Share This Book
              </button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Details;
