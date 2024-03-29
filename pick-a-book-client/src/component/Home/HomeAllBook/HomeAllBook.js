import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import "./HomeAllBook.css";
import axios from "axios";
import { Url } from "../../../apiurl/api";

const HomeAllBook = () => {
  let navigate = useNavigate();
  const [Books, setBooks] = useState();

  let params = useParams();

  // all same catagory books
  useEffect(() => {
    axios
      .get("https://bookwebsite.wiztecbd.online/catagory", {
        params: {
          CATAGORY: params.catagory,
        },
      })
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});
  }, [params.catagory]);

  // handle view details
  const viewDetails = (id) => {
    navigate(`/ViewDetails/${id}`);
  };

  console.log(Books);
  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div className="all-book-container">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                paddingRight: {
                  lg: "28%",
                  xs: "10%",
                },
              }}
            >
              <p className="catagory-name">{params.catagory}</p>
              <p className="catagory-amount">(Showing {Books?.length} Books)</p>
            </Box>
            {Books === undefined && (
              <ReactLoading
                type={"spokes"}
                color={"#33c24d"}
                height={75}
                width={75}
              />
            )}
            {Books?.length === 0 && (
              <Typography
                sx={{
                  fontSize: {
                    lg: "25px",
                  },
                  marginLeft: {
                    lg: "-5%",
                  },
                }}
              >
                No books found in this category
              </Typography>
            )}
          </Box>
          <div className="all-book-cards">
            {Books?.map((book, index) => (
              <div key={index}>
                <div className="all-book-card">
                  <div className="allbook-inner-card">
                    {book.image === undefined ? (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"
                        alt=""
                      />
                    ) : (
                      <img src={Url+`${book?.image}`}  alt="" />
                    )}

                    <p className="card-title">{book?.book_name}</p>
                    <p className="book-author">{book?.author_name}</p>

                    <p className="book-price">
                      <strike className="main-price">TK. {book?.price}</strike>
                      <span>
                        TK.
                        {Math.round(
                          book.price -
                            (book.offer_percentage / 100) * book.price
                        )}
                      </span>
                    </p>
                  </div>
                  <button
                    className="allbook-btn"
                    onClick={() => viewDetails(book._id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default HomeAllBook;
