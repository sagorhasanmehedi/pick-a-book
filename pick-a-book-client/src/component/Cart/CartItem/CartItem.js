import React from "react";
import "./CartItem.css";
import { useNavigate } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Grid } from "@mui/material";
import Swal from "sweetalert2";
import { RemoveBook, GetDb } from "../../../Hook/AddToDb";

const CartItem = ({ Cart, setIsBookRemove, IsBookRemove }) => {
  let navigate = useNavigate();

  // handle handlea Item Remove
  const handleaItemRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: `You may not get the book later . Are you sure you want to removed the book from the cart?`,

      showCancelButton: true,
      confirmButtonColor: "Crimson",
      cancelButtonColor: " LightSeaGreen",
      confirmButtonText: "Removed",
    }).then((result) => {
      if (result.value) {
        const newItem = Cart.filter((book) => book._id !== id);
        RemoveBook(newItem);
        setIsBookRemove(!IsBookRemove);
      }
    });
  };

  // handle place order
  const handelBookDetails = () => {
    navigate(`/PlaceOrder`);
  };

  // handel book quantity plus
  const handelAmountPlus = (id) => {
    const storCart = GetDb();
    const newArr = storCart.map((obj) => {
      if (obj._id === id) {
        const newQuantity = obj.quantity + 1;
        return { ...obj, quantity: newQuantity };
      }

      return obj;
    });

    localStorage.setItem("Book", JSON.stringify(newArr));
    setIsBookRemove(!IsBookRemove);
  };

  // handel book quantity minus
  const handelAmountMinus = (id) => {
    const storCart = GetDb();
    const newArr = storCart.map((obj) => {
      if (obj._id === id) {
        if (obj.quantity <= 1) {
          return obj;
        }

        const newQuantity = obj.quantity - 1;
        return { ...obj, quantity: newQuantity };
      }

      return obj;
    });

    localStorage.setItem("Book", JSON.stringify(newArr));
    setIsBookRemove(!IsBookRemove);
  };



  return (
    <div className="">
      {Cart?.map((book) => (
        <div key={book.id} className="cart-item">
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: " center",
                }}
              >
                <img alt="" src={book.image} />
              </div>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: " center",
              }}
              item
              xs={12}
              md={4}
            >
              <div className="cart-book-name">
                <p>{book.book_name}</p>
                <p className="cart-book-author-name">{book.author_name}</p>
                <button
                  onClick={() => handleaItemRemove(book._id)}
                  className="delete-button"
                >
                  <DeleteForeverIcon />
                </button>
              </div>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: " center",
              }}
              item
              xs={12}
              md={3}
            >
              <div className="item-button">
                <button onClick={() => handelAmountMinus(book._id)}>-</button>
                <input value={book.quantity} />
                <button onClick={() => handelAmountPlus(book._id)}>+</button>
              </div>
            </Grid>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: " center",
              }}
              item
              xs={12}
              md={2}
            >
              <div>
                <p className="cart-price">
                  Tk.
                  {Math.round(
                    book.price - (book.offer_percentage / 100) * book.price
                  ) * book.quantity}
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
      <div className="confirm-button">
        <p>একসাথে যত খুশি পণ্য অর্ডার করুন, শিপিং চার্জ মাত্র 50 টাকা</p>
       

        {Cart === undefined || Cart === null || Cart?.length === 0 ? (
          <button className="cartEmptyButton">Your Cart is Empty!</button>
        ) : (
          <button onClick={handelBookDetails}>Place Order</button>
        )}
        
      </div>
    </div>
  );
};

export default CartItem;
