import React from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";

const Banner = ({ banner, catagory }) => {
  let navigate = useNavigate();

  // view all book from this catagory
  const handelAllbook = (catagory) => {
    navigate(`/HomeAllBook/${catagory}`);
  };

  return (
    <div className="banner">
      {catagory ? (
        <img onClick={() => handelAllbook(catagory)} alt="" src={banner} />
      ) : (
        <img alt="" src={banner} />
      )}
    </div>
  );
};

export default Banner;
