import React from "react";
import { Box } from "@mui/system";
import "./Book.css";
import axios from "axios";
import Swal from "sweetalert2";

const Book = ({ book, handelDeleteState }) => {
 

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
              handelDeleteState(id);
              Swal.fire({
                icon: "success",
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


 


  return (
    <Box sx={{ textAlign: "center" }}>
      <img className="book_image" src={book.image} alt="" />
      <Box>
        <p className="book_name">{book.book_name}</p>
        <p className="stock-amount">Stock ({book.stock}) </p>
        <p className="book_authorname">{book.author_name}</p>

        <Box>
          {book.offer_percentage === "undefined"  ? (
            <p className="offer_price">৳ {book.price}</p>
          ) : (
            <p className="offer_price">৳ {Math.round(book.price - (book.offer_percentage / 100) * book.price)}</p>
          )}

          {book.offer_percentage === "undefined"  ? (
            <div></div>
          ) : (
            <p className="calculet_price">
              ৳ {book.price} - {book.offer_percentage}%
            </p>
          )}
        </Box>

        <button className="edit_button">Edit</button>
        <button
          className="delete_button"
          onClick={() => haldel_book_delete(book._id)}
        >
          Delete
        </button>
      </Box>
    </Box>
  );
};

export default Book;
