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

  // console.log(books);



  useEffect(() => {
    axios
      .get("http://localhost:7000/get_all_book")
      .then(function (response) {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <LayoutContiner>
      <SubNav project={"ALL BOOK"} />

      {books.length === 0 ? (
       <Box   sx={{ display: "flex", justifyContent: "center" }}>
          <ReactLoading
          type={"spokes"}
          color={"#6aaad4"}
          height={75}
          width={75}
        />
       </Box>
      ) : (
        <Grid container spacing={4}>
          {books.map((book, index) => (
            <Grid
              sx={{ display: "flex", justifyContent: "center" }}
              key={index}
              item
              md={3}
              sm={12}
            >
              <Book book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </LayoutContiner>
  );
};

export default AllBook;
