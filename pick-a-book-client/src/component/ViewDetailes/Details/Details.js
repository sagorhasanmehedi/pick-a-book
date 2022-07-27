import { Grid, Rating } from "@mui/material";
import React from "react";
import "./Details.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PdfViewer from "../../PdfViewer/PdfViewer";
import { useNavigate } from "react-router-dom";
import { AddToDb } from "../../../Hook/AddToDb";

const Details = ({ Book, ratingCount, reviewCount, calculateRating }) => {
  let navigate = useNavigate();

  // view all book from this catagory
  const handelAllbook = (catagory) => {
    navigate(`/HomeAllBook/${catagory}`);
  };

  const handelAddToCart = () => {
    AddToDb(Book);
  };

  return (
    <>
      <div className="detais">
        <Grid container columnSpacing={7}>
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
              {Book.image === undefined ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"
                  alt=""
                />
              ) : (
                <img src={Book.image} alt="" />
              )}
            </div>
          </Grid>
          <Grid item xs={12} md={8} sm={12}>
            <div className="book-info">
              <h1>
                {Book.book_name}
                {Book.cover_type === undefined ||
                Book.cover_type === "Select A Cover Type" ||
                Book.cover_type === "None" ? (
                  <div> </div>
                ) : (
                  <span className="book-cover-type"> ({Book.cover_type})</span>
                )}
              </h1>
              <p className="book-sub-heading">{Book.sub_Title}</p>
              <p className="details-author-name">
                by<span>{Book.author_name}</span>
              </p>
              <p
                onClick={() => handelAllbook(Book.catagory)}
                className="details-catagory-name"
              >
                Category:<span>{Book.catagory}</span>
              </p>

              <div className="details-retaing">
                <Rating
                  name="half-rating-read"
                  value={calculateRating}
                  precision={0.5}
                  readOnly
                  sx={{ color: "#ff9900" }}
                />
                <p>
                  {ratingCount?.length} Reting / {reviewCount?.length} Review
                </p>
              </div>

              <div className="price">
                <strike className="price-stark">TK. {Book.price} </strike>
                <span>
                  TK.
                  {Math.round(
                    Book.price - (Book.offer_percentage / 100) * Book.price
                  )}
                </span>
                <span className="price-save-title">
                  You Save TK.
                  {Math.round((Book.offer_percentage / 100) * Book.price)}
                </span>
              </div>
              {Book.offer_name ? (
                <p className="offer">
                  Offers:
                  <span>{Book.offer_name}</span>
                </p>
              ) : (
                <p></p>
              )}
              <p className="stock">
                <CheckCircleOutlineIcon
                  sx={{ marginRight: "7px", color: "#33c24d" }}
                />
                In Stock
                <span>(only {Book.stock} copies left)</span>
              </p>
              <p className="stock-alart">* স্টক আউট হওয়ার আগেই অর্ডার করুন</p>

              <div className="buttomn-container">
                <PdfViewer pdf={Book.pdf} />

                {Book.price === undefined ? (
                  <button className="Add-to-Cart-button book_price_undefined">
                    <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Wait please
                  </button>
                ) : (
                  <button
                    onClick={handelAddToCart}
                    className="Add-to-Cart-button"
                  >
                    <ShoppingCartIcon sx={{ marginRight: "5px" }} /> Add to Cart
                  </button>
                )}
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

      
    </>
  );
};

export default Details;
