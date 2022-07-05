import React, { useState } from "react";
import "./RetingRevive.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import { useNavigate } from "react-router-dom";
import { Box, Input, Rating } from "@mui/material";
import Swal from "sweetalert2";
import UseAuth from "../../../Hook/UseAuth";
const axios = require("axios").default;

const RetingRevive = ({
  Book,
  AllRatingReview,
  setisSubmit,
  isSubmit,
  ratingCount,
  reviewCount,
  calculateRating,
}) => {
  const [RatingValue, setRatingValue] = useState(0);
  const [Review, setReview] = useState();
  const [isReview, setIsReview] = useState(false);
  let navigate = useNavigate();
  const { user } = UseAuth();


console.log(user?.Full_Name);
console.log(AllRatingReview);


  // view all book
  const handelAllbook = () => {
    navigate(`/Login`);
  };

  // handel Raview submit
  const handelReviewSubmit = () => {
    if (RatingValue === 0 && Review === undefined) {
      Swal.fire({
        icon: "error",
        title: " Please give some valid review or rating.!",
        showConfirmButton: false,
        timer: 1500,
      });
      setIsReview(false);
      return;
    }

    axios
      .post(`https://pick-a-book-v1.herokuapp.com/ratingReview/${Book._id}`, {
        RatingValue: RatingValue,
        Review: Review,
        reviewer_name:user?.Full_Name,
        date:new Date().toJSON().slice(0, 10),
      })
      .then((response) => {
        if (response.data.acknowledged === true) {
          setIsReview(false);
          setisSubmit(!isSubmit);
          Swal.fire({
            icon: "success",
            title: "Thank you so much for your rating or review.!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handel feedback
  const handelFeedback = () => {
    Swal.fire({
      icon: "success",
      title: "Thank you for your valuable feedback",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="riveaw-container">
      <div className="reviews-heading">
        <div>
          <h2>Reviews and Ratings</h2>
          <div className="total-review">
            <div>
              <h2>{isNaN(calculateRating) ? 0 : calculateRating.toFixed(1)}</h2>
            </div>
            <div>
              <p>
                {ratingCount?.length} Ratings and {reviewCount?.length} Reviews
              </p>
              <Rating
                name="half-rating-read"
                value={calculateRating}
                precision={0.5}
                readOnly
                sx={{ color: "#ff9900" }}
              />
            </div>
          </div>
        </div>

        <div className="review-login">
          {user?.Email ? (
            <button onClick={() => setIsReview(true)} className="write-review">
              Write a Review
            </button>
          ) : (
            <>
              <p>Please login to write review</p>
              <button onClick={handelAllbook}>Login</button>
            </>
          )}
        </div>
      </div>

      {isReview ? (
        <div className="review-form">
          <Input
            inputProps={{ style: { fontSize: 20, paddingBottom: 15 } }}
            placeholder="Please write your honest opinion and give a rating"
            sx={{ width: "100%", marginBottom: "30px" }}
            onChange={(e) => setReview(e.target.value)}
          />

          <div className="review-submit">
            <div>
              <Rating
                precision={0.5}
                name="half-rating"
                value={RatingValue}
                sx={{ color: "#ff9900" }}
                onChange={(event, newValue) => {
                  setRatingValue(newValue);
                }}
              />
            </div>
            <button
              onClick={handelReviewSubmit}
              className="review-submit-button"
            >
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {AllRatingReview?.map((ratingreview) => (
        <div className="review">
          <div className="user-img">
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14Gh1B0TDIqZAUml-QKusgpWPuKYoyA7VXhyiGXFJUQ=s96-c"
              alt=""
            />
            <div className="review-by">
              <p>
                <span>By</span> {ratingreview.reviewer_name}
                <span> {ratingreview.date}</span>
              </p>

              <Rating
                name="text-feedback"
                value={ratingreview?.rating}
                precision={0.5}
                readOnly
                sx={{ color: "#ff9900" }}
              />
              <div className="verified-container">
                <div className="verified-icon">
                  <VerifiedUserIcon sx={{ color: "#33c24d", width: "20px" }} />
                  <p>Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
          <p className="comment">{ratingreview?.reaview}</p>
          <p className="comment-title">Was this review helpful to you?</p>
          <button onClick={handelFeedback}>
            <ThumbUpOutlinedIcon />
          </button>
          <button onClick={handelFeedback} className="not-helpful-button">
            <ThumbDownAltOutlinedIcon />
          </button>
        </div>
      ))}
    </div>
  );
};

export default RetingRevive;
