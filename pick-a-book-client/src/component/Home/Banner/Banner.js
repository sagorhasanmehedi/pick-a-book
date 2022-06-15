import React from "react";
import "./Banner.css"

const Banner = ({banner}) => {
  return (
    <div className="banner">
      <img alt="" src={banner} />
    </div>
  );
};

export default Banner;
