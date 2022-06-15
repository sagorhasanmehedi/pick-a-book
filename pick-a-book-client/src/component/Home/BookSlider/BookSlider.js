import React from "react";
import "./BookSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  useNavigate } from 'react-router-dom';
import Slider from "react-slick";


const BookSlider = ({ Books, title }) => {
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
const handelAllbook=()=>{
  
  navigate(`/HomeAllBook/${title}`);
}

// view book details
const handelBookDetails=()=>{
  
  navigate(`/ViewDetails`);
}


  return (
    <div className="content">
      <div className="slider-header">
        <p className="catagory">{title}</p>
        <button onClick={handelAllbook} className="slider-view-button">View All</button>
      </div>

      <Slider {...sliderSettings}>
        {Books?.map((book, index) => (
          <div className="slide-card" key={index}>
            <div className="slide-inner-card">
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
              <p className="book-author">{book?.author_name?.slice(0, 1)}</p>
              <p className="book-price">
                <strike className="main-price">TK. 150</strike>
                <span>TK. 100</span>
              </p>
            </div>
            <button onClick={handelBookDetails} className="btn">View Details</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookSlider;
