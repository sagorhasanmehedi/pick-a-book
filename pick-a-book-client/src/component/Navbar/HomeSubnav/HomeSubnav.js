import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSubnav.css";

const HomeSubnav = () => {
  let navigate = useNavigate();

  // view all book from this catagory
  const handelAllbook = () => {
    navigate(`/HomeAllBook/${"javascript"}`);
  };

  return (
    <div className="home-subnav">
      <ul>
        <li onClick={handelAllbook}>লেখক</li>
        <li onClick={handelAllbook}>বিষয়</li>
        <li onClick={handelAllbook}>প্রকাশনী</li>
        <li onClick={handelAllbook}>স্টকের প্রোডাক্ট সমূহ</li>
        <li onClick={handelAllbook}>বইমেলা ২০২২</li>
        <li onClick={handelAllbook}>ইসলামি বই</li>
        <li onClick={handelAllbook}>বেস্টসেলার বই</li>
        <li onClick={handelAllbook}>উপন্যাস</li>
        <li onClick={handelAllbook}>বিজ্ঞানবাক্স</li>
        <li onClick={handelAllbook}>ফ্রিল্যান্সিং/প্রোগ্রামিং</li>
        <li onClick={handelAllbook}>পশ্চিমবঙ্গের বই</li>
      </ul>
    </div>
  );
};

export default HomeSubnav;
