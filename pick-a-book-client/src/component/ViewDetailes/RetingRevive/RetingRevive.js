import React, { useState } from "react";
import "./RetingRevive.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { useNavigate } from "react-router-dom";
import { Input, Rating } from "@mui/material";
const axios = require('axios').default;


const RetingRevive = ({Book}) => {
  const [RatingValue, setRatingValue] = useState(0);
  const [isReview, setIsReview] = useState(false);
  const [Review, setReview] = useState()
 let navigate = useNavigate();


 
  // view all book
  const handelAllbook = () => {
    navigate(`/Login`);
  };


  // handel Review submit
  const handelReviewSubmit=()=>{
    console.log(RatingValue);
    console.log(Review);
   

    axios.put(`http://localhost:7000/retingReview/${Book._id}`, {
      RatingValue: RatingValue,
      Review: Review
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });


  //   axios({
  //     method: 'put',
  //     url: '/api/article/123',
  //     data: {
  //         title: 'Making PUT Requests with Axios',
  //         status: 'published'
  //     }
  // })
  }



  return (
    <div className="riveaw-container">
      <div className="reviews-heading">
        <div>
          <h2>Reviews and Ratings</h2>
          <div className="total-review">
            <div>
              <h2>4.0</h2>
            </div>
            <div>
              <p>33 Ratings and 17 Reviews</p>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="review-login">
          {/* <p>Please login to write review</p>
          <button onClick={handelAllbook}>Login</button> */}
          <button onClick={() => setIsReview(true)} className="write-review">
            Write a Review
          </button>
        </div>
      </div>

      {isReview ? (
        <div className="review-form">
          <Input
            inputProps={{ style: { fontSize: 20, paddingBottom: 15 } }}
            placeholder="Please write your honest opinion and give a rating"
            sx={{ width: "100%", marginBottom: "30px" }}
            onChange={(e)=>setReview(e.target.value)}
          />

          <div className="review-submit">
            <div>
              <Rating
                precision={0.5}
                name="half-rating"
                value={RatingValue}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
            </div>
            <button  onClick={ handelReviewSubmit} className="review-submit-button">Submit</button>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      <div className="review">
        <div className="user-img">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gh1B0TDIqZAUml-QKusgpWPuKYoyA7VXhyiGXFJUQ=s96-c"
            alt=""
          />
          <div className="review-by">
            <p>
              <span>By</span> Marufa Yasmin<span> 22 Mar 2020</span>
            </p>

            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <div className="verified-container">
              <div className="verified-icon">
                <VerifiedUserIcon sx={{ color: "#33c24d", width: "20px" }} />
                <p>Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>
        <p className="comment">
          boitate starting point theke eto kothin word diye shuru korche ja new
          der jonno porte ekto kostokor.
        </p>
        <p className="comment-title">Was this review helpful to you?</p>
        <button>
          <ThumbUpOutlinedIcon />
        </button>
        <button className="not-helpful-button">
          <ThumbDownAltOutlinedIcon />
        </button>
      </div>
      <div className="review">
        <div className="user-img">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gh1B0TDIqZAUml-QKusgpWPuKYoyA7VXhyiGXFJUQ=s96-c"
            alt=""
          />
          <div className="review-by">
            <p>
              <span>By</span> Marufa Yasmin<span> 22 Mar 2020</span>
            </p>

            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <div className="verified-container">
              <div className="verified-icon">
                <VerifiedUserIcon sx={{ color: "#33c24d", width: "20px" }} />
                <p>Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>
        <p className="comment">
          boitate starting point theke eto kothin word diye shuru korche ja new
          der jonno porte ekto kostokor.
        </p>
        <p className="comment-title">Was this review helpful to you?</p>
        <button>
          <ThumbUpOutlinedIcon />
        </button>
        <button className="not-helpful-button">
          <ThumbDownAltOutlinedIcon />
        </button>
      </div>
      <div className="review">
        <div className="user-img">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gh1B0TDIqZAUml-QKusgpWPuKYoyA7VXhyiGXFJUQ=s96-c"
            alt=""
          />
          <div className="review-by">
            <p>
              <span>By</span> Marufa Yasmin<span> 22 Mar 2020</span>
            </p>

            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
            <div className="verified-container">
              <div className="verified-icon">
                <VerifiedUserIcon sx={{ color: "#33c24d", width: "20px" }} />
                <p>Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>
        <p className="comment">
          boitate starting point theke eto kothin word diye shuru korche ja new
          der jonno porte ekto kostokor.
        </p>
        <p className="comment-title">Was this review helpful to you?</p>
        <button>
          <ThumbUpOutlinedIcon />
        </button>
        <button className="not-helpful-button">
          <ThumbDownAltOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default RetingRevive;
