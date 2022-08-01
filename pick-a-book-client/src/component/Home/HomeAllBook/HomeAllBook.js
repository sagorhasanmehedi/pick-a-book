import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./HomeAllBook.css";
import axios from "axios";

const HomeAllBook = () => {
  let navigate = useNavigate();
  const [Books, setBooks] = useState();

  let params = useParams();

  console.log(Books);
  console.log(params.catagory);

  // all same catagory books
  useEffect(() => {
    axios
      .get("https://pickabook.rpi.gov.bd/catagory", {
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
            <Box>
              <p className="catagory-name">{params.catagory}</p>
              <p className="catagory-amount">(Showing {Books?.length} Books)</p>
            </Box>
            {Books === undefined && (
              <Typography
                sx={{
                  fontSize: {
                    lg: "25px",
                  },
                  marginLeft: "23%",
                }}
              >
                No books found
              </Typography>
            )}
            {Books?.length === 0 && (
              <Typography
                sx={{
                  fontSize: {
                    lg: "25px",
                  },
                  marginLeft: "23%",
                }}
              >
                No books found in this category
              </Typography>
            )}
          </Box>
          <div className="all-book-cards">
            {Books?.map((book) => (
              <div>
                <div className="all-book-card">
                  <div className="allbook-inner-card">
                    {book.image === undefined ? (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"
                        alt=""
                      />
                    ) : (
                      <img src={book.image} alt="" />
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
