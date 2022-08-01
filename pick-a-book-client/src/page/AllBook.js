import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Book from "../component/Book/Book";
import SubNav from "../component/SubNav/SubNav";
import { LayoutContiner } from "../style/MetariulUiStyle";
import ReactLoading from "react-loading";
import { Box } from "@mui/system";

const AllBook = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://pickabook.rpi.gov.bd/get_all_book")
      .then(function (response) {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  // manage delete book
  const handelDeleteState = (id) => {
    const updatedState = books.filter((book) => book._id !== id);
    setBooks(updatedState);
  };


  return (
    <LayoutContiner>
      <SubNav project={"ALL BOOK"} />

      {books.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ReactLoading
            type={"spokes"}
            color={"#6aaad4"}
            height={75}
            width={75}
          />
        </Box>
      ) : (
        <Grid
          container
          rowSpacing={6}
          columnSpacing={0}
          sx={{
            display: "flex",
            justifyContent: {
              md: "left",
              xs: "center",
            },
          }}
        >
          {books.map((book, index) => (
            <Grid key={index} item md={3} sm={12}>
              <Book book={book} handelDeleteState={handelDeleteState} />
            </Grid>
          ))}
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default AllBook;
