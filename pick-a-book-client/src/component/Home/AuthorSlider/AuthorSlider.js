import React from 'react';
import "./AuthorSlider.css"
import authorImage from "../../../assets/images/2.jpg"
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';

const AuthorSlider = ({author}) => {
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


// view all author
const handelAllbook=()=>{
  
  navigate(`/AllAuthore`);
}


    return (
        <div className="author-slider">
      <div className="slider-header">
        <p className="catagory">Popular Authors</p>
        <button onClick={handelAllbook} className="slider-view-button">View All</button>
      </div>
      {/* <Slider {...sliderSettings}>
        {author.map((card, index) => (
          <div  key={index}>
            <div className="author-card">
              <img alt="" src={authorImage} />
              <img
                alt=""
                src={`https://covers.openlibrary.org/a/olid/${card?.author_key}-M.jpg`}
               
              />
              <p className="card-title">{card.author_name?.slice(0,1)}</p>
             
            </div>
           
          </div>
        ))}
      </Slider> */}
    </div>
    );
};

export default AuthorSlider;