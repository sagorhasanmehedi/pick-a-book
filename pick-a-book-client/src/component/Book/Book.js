import React from "react";
import { Box } from "@mui/system";
import "./Book.css";
import axios from "axios";
import Swal from "sweetalert2";

// delete book
const haldel_book_delete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this! ",

    showCancelButton: true,
    confirmButtonColor: "Crimson",
    cancelButtonColor: " LightSeaGreen",
    confirmButtonText: "Delete",
  }).then((result) => {
    if (result.value) {
      axios
        .delete(`http://localhost:7000/delete_book/${id}`)
        .then(function (response) {
          if (response.data.deletedCount) {
            Swal.fire({
                icon: 'success',
             
              title: "Deleted!",
              text: "Your file has been deleted.",
              timer: 1500,
              showCancelButton: false,
              showConfirmButton: false,
            });

           
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
};

const Book = ({ book }) => {


  console.log(book.image)
  return (
    <Box>
      <img
        className="book_image"
        src={book.image}
        alt=""
      />
      <Box sx={{ paddingRight: "50px" }}>
        <p className="book_name">{book.book_name}</p>
        <Box sx={{ display: "flex" }}>
          <Box>
            <p className="offer_price"> ৳ {book.offer_price}</p>
            <p className="calculet_price">
              ৳ {book.price} - {book.offer_percentage}%
            </p>
            <p className="stock">Stock ({book.stock}) </p>
          </Box>
          <Box sx={{ marginLeft: "65px" }}>
            <button className="edit_button">Edit</button> <br />
            <button
              className="delete_button"
              onClick={() => haldel_book_delete(book._id)}
            >
              Delete
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Book;
