import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeSubnav.css";

const HomeSubnav = () => {
  let navigate = useNavigate();

  // view all book from this catagory
  const handelAllbook = (catagory) => {
    navigate(`/HomeAllBook/${catagory}`);
  };

  return (
    <div className="home-subnav">
      <ul>
        <li onClick={()=>handelAllbook("অতিরিক্ত ছাড়")}>অতিরিক্ত ছাড়</li>
        <li onClick={()=>handelAllbook("গল্প")}>গল্প</li>
        <li onClick={()=>handelAllbook("বইমেলা ২০২২")}>বইমেলা ২০২২</li>
        <li onClick={()=>handelAllbook("দর্শন")}>দর্শন</li>
        <li onClick={()=>handelAllbook("মুক্তিযুদ্ধ")}>মুক্তিযুদ্ধ</li>
        <li onClick={()=>handelAllbook("ইসলামি বই")}>ইসলামি বই</li>
        <li onClick={()=>handelAllbook("বেস্টসেলার বই")}>বেস্টসেলার বই</li>
        <li onClick={()=>handelAllbook("উপন্যাস")}>উপন্যাস</li>
        <li onClick={()=>handelAllbook("বিজ্ঞানবাক্স")}>বিজ্ঞানবাক্স</li>
        <li onClick={()=>handelAllbook("ফ্রিল্যান্সিং প্রোগ্রামিং")}>ফ্রিল্যান্সিং/প্রোগ্রামিং</li>
        <li onClick={()=>handelAllbook("পশ্চিমবঙ্গের বই")}>পশ্চিমবঙ্গের বই</li>
      </ul>
    </div>
  );
};

export default HomeSubnav;
