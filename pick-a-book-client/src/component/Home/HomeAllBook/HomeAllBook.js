import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import "./HomeAllBook.css";

const HomeAllBook = () => {
  let navigate = useNavigate();
  const [Books, setBooks] = useState();

  let params = useParams();

  // parl section
  useEffect(() => {
    fetch(`https://openlibrary.org/search.json?q=${params.catagory}`)
      .then((ans) => ans.json())
      .then((result) => {
        const data = result.docs.slice(0, 20);

        setBooks(data);
      });
  }, []);

 

 // handle view details
const viewDetails=()=>{
  navigate(`/ViewDetails`);
}

  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <div className="all-book-container">
          <p className="catagory-name">{params.catagory}</p>
          <p className="catagory-amount">(Showing 1 to 60 of 1990 eBooks)</p>
          <div className="all-book-cards">
            {Books?.map((book) => (
              <div>
                <div className="all-book-card">
                  <div className="allbook-inner-card">
                    {book.cover_i === undefined ? (
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"
                        alt=""
                      />
                    ) : (
                      <img
                        src={`https://covers.openlibrary.org/b/id/${book?.cover_i}-M.jpg`}
                        alt=""
                      />
                    )}

                    <p className="card-title">{book?.title}</p>
                    <p className="book-author">
                      {book?.author_name?.slice(0, 1)}
                    </p>
                    <p className="book-price">
                      <strike className="main-price">TK. 150</strike>
                      <span>TK. 100</span>
                    </p>
                  </div>
                  <button className="allbook-btn" onClick={viewDetails}>View Details</button>
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
