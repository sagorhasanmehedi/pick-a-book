import React, { useEffect, useState } from "react";
import "./CartItem.css";
import {  useNavigate } from 'react-router-dom';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Grid } from "@mui/material";
import Swal from "sweetalert2";

const CartItem = () => {
  let navigate = useNavigate();
  let [Amount, setAmount] = useState(0);
  let [books, setbooks] = useState([]);

  const AllBooks = [
   


    {
      name: "প্রোগ্রামিং এর আদ্যোপান্ত",
      id: 1,
      price: 230,
      offerPrice: 200,
      image:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/rokimg_20140709_9618.GIF",
    },
    {
      name: " জোবায়েরস সিরিজের সাম্প্রতিক ক্যাপসুল ১ (ঢাবি খ ও ঘ ইউনিট) জোবায়ের আহমেদ",
      id: 2,
      price: 440,
      offerPrice: 420,
      image:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/c91ce3dc9_157644.jpg",
    },
    {
      name: "প্রোগ্রামিং কনটেস্ট ডেটা স্ট্রাকচার ও অ্যালগরিদম",
      id: 3,
      price: 700,
      offerPrice: 670,
      image:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/5c551ac8c_117663.jpg",
    },
    {
      name: "প্রোগ্রামিং এর আদ্যোপান্ত",
      id: 4,
      price: 1100,
      offerPrice: 1030,
      image:
        "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/95512cdf1cf4_128993.jpg",
    },
  ];

  useEffect(() => {
    setbooks(AllBooks);
  }, []);

  // handel amount minus
  const handleMinus = () => {
    if (Amount === 0) {
      return;
    }
    setAmount(Amount - 1);
  };

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
        const newItem = books.filter((book) => book.id !== id);
        setbooks(newItem);
      }
    });
  };
  
// handle place order
  const handelBookDetails=()=>{
  
    navigate(`/PlaceOrder`);
  }
  

  return (
    <div className="">
      {books?.map((book) => (
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
                <p>{book.name}</p>
                <p className="cart-book-author-name">সাদাত হোসাইন</p>
                <button
                  onClick={() => handleaItemRemove(book.id)}
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
                <button onClick={handleMinus}>-</button>
                <input value={Amount} />
                <button onClick={() => setAmount(Amount + 1)}>+</button>
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
                <p className="cart-price">Tk. {book.price}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      ))}
      <div className="confirm-button">
        <p>একসাথে যত খুশি পণ্য অর্ডার করুন, শিপিং চার্জ মাত্র 50 টাকা</p>
        <button onClick={handelBookDetails}>Place Order</button>
      </div>
    </div>
  );
};

export default CartItem;
