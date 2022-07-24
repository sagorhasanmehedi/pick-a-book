import React from "react";
import "./BookSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const BookSlider = ({ Books, catagory }) => {


 
  let navigate = useNavigate();

  const sliderSettings = {
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  // view all book
  const handelAllbook = () => {
    navigate(`/HomeAllBook/${catagory}`);
  };

  // view book details
  const handelBookDetails = (id) => {
  navigate(`/ViewDetails/${id}`);
  };

  return (
    <div className="content">
      <div className="slider-header">
        <p className="catagory">{catagory}</p>
        <button onClick={handelAllbook} className="slider-view-button">
          View All
        </button>
      </div>

      <Slider {...sliderSettings}>
        {Books?.map((book, index) => (
          <div className="slide-card" key={index}>
            <div className="slide-inner-card">
              {book.image === undefined ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNT0xwyLstvC7wH8jYIKur3GTcSq-g6fj2EbL4wk-qaONHYjBswa3rpFsZJeEjuXcG-lw&usqp=CAU"
                  alt=""
                />
              ) : (
                <img src={book?.image} alt="" />
              )}

              <p className="card-title">{book?.book_name}</p>
              <p className="book-author">{book?.author_name}</p>
              <p className="book-price">
                <strike className="main-price">TK. {book?.price}</strike>
                <span>
                  TK.
                  {Math.round(
                    book.price - (book.offer_percentage / 100) * book.price
                  )}
                </span>
              </p>
            </div>
            <button onClick={()=>handelBookDetails(book._id)} className="btn">
              View Details
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookSlider;
