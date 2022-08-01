import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar/Navbar";
import Details from "../component/ViewDetailes/Details/Details";
import RetingRevive from "../component/ViewDetailes/RetingRevive/RetingRevive";
import SideDetails from "../component/ViewDetailes/SideDetails/SideDetails";

const ViewDetailes = () => {
  const [AllRatingReview, setAllRatingReview] = useState(null);
  const [isSubmit, setisSubmit] = useState(true);
  const [Book, setBook] = useState({});
  let params = useParams();

  useEffect(() => {
    axios
      .get(`https://pickabook.rpi.gov.bd/single/${params.id}`)
      .then((respons) => {
        setBook(respons.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  // get all reting and Review
  useEffect(() => {
    axios
      .get(`https://pickabook.rpi.gov.bd/ratingReview/${Book._id}`)
      .then((respnse) => {
        setAllRatingReview(respnse.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [Book._id, isSubmit]);

  // counting rating and review
  const ratingCount = AllRatingReview?.filter((R) => R.rating !== 0);
  const reviewCount = AllRatingReview?.filter((R) => R.reaview !== null);

  // calculet total reting
  let totalRating = 0;
  if (AllRatingReview !== null) {
    for (let i = 0; i <= AllRatingReview?.length; i++) {
      const element = AllRatingReview[i];
      if (element) {
        totalRating = totalRating + element?.rating;
      }
    }
  }
  const calculateRating = totalRating / ratingCount?.length;



  return (
    <div style={{ backgroundColor: "#eff0f5" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: { xs: "90%", sm: "70%" },
            mt: "20px",
          }}
        >
          <Grid container sx={{ boxShadow: "0px 4px 6px -3px #9c9c9c" }}>
            <Grid item xs={12} sm={12} md={9}>
              <Details
                Book={Book}
                ratingCount={ratingCount}
                reviewCount={reviewCount}
                calculateRating={calculateRating}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
              <SideDetails />
            </Grid>
          </Grid>
          <RetingRevive
            Book={Book}
            AllRatingReview={AllRatingReview}
            setAllRatingReview={setAllRatingReview}
            setisSubmit={setisSubmit}
            isSubmit={isSubmit}
            ratingCount={ratingCount}
            reviewCount={reviewCount}
            calculateRating={calculateRating}
          />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default ViewDetailes;
