import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Banner from "../component/Home/Banner/Banner";
import BookSlider from "../component/Home/BookSlider/BookSlider";
import Navbar from "../component/Navbar/Navbar/Navbar";
import CatagoryButton from "../component/Home/CatagoryButton/CatagoryButton";
import banner1 from "../assets/images/banner1.gif";
import banner3 from "../assets/images/banner3.gif";
import CatagoryIconBnner from "../component/Home/CatagoryIconBnner/CatagoryIconBnner";
import AuthorSlider from "../component/Home/AuthorSlider/AuthorSlider";
import Footer from "../component/Footer/Footer";
import axios from "axios";

const Home = () => {
  const [Uponashas, setUponashas] = useState([]);
  const [Ruby, setRuby] = useState([]);
  const [Shell, setShell] = useState([]);
  const [java, setJava] = useState([]);
  const [C, setC] = useState([]);
  const [parl, setParl] = useState([]);

  // first book button catagori
  const catagorys1 = [
    { name: "শেষের কবিতা", catagory: "javascript" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "javascript" },
    { name: "ফেলুদা সমগ্র", catagory: "javascript" },
    { name: "মিসির আলি", catagory: "javascript" },
    { name: "সত্যজিৎ রায়", catagory: "javascript" },
    { name: "সত্যজিৎ রায়", catagory: "javascript" },
  ];

  // secend book button catagori
  const catagorys2 = [
    { name: "শেষের কবিতা", catagory: "javascript" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "javascript" },
    { name: "ফেলুদা সমগ্র", catagory: "javascript" },
    { name: "মিসির আলি", catagory: "javascript" },
    { name: "সত্যজিৎ রায়", catagory: "javascript" },
    { name: "সত্যজিৎ রায়", catagory: "javascript" },
    { name: "শেষের কবিতা", catagory: "javascript" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "javascript" },
    { name: "ফেলুদা সমগ্র", catagory: "javascript" },
    { name: "মিসির আলি", catagory: "javascript" },
    { name: "সত্যজিৎ রায়", catagory: "javascript" },
    { name: "সত্যজিৎ রায়", catagory: "javascript" },
  ];

  // উপন্যাসের বই
  useEffect(() => {
    axios
      .get("http://localhost:7000/catagory",{
        params:{
          CATAGORY:"উপন্যাসের বই"
        }
      })
      .then( (response) => {
        setUponashas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});

    
  }, []);

  // paithon section
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=Ruby")
      .then((ans) => ans.json())
      .then((result) => {
        const data = result.docs.slice(0, 20);
        setRuby(data);
      });
  }, []);

  // shell section
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=shell")
      .then((ans) => ans.json())
      .then((result) => {
        const data = result.docs.slice(0, 20);
        setShell(data);
      });
  }, []);

  // java section
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=java")
      .then((ans) => ans.json())
      .then((result) => {
        const data = result.docs.slice(0, 20);
        setJava(data);
      });
  }, []);

  // C++ section
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=cprogramming")
      .then((ans) => ans.json())
      .then((result) => {
        const data = result.docs.slice(0, 20);
        setC(data);
      });
  }, []);

  // parl section
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=parl")
      .then((ans) => ans.json())
      .then((result) => {
        const data = result.docs.slice(0, 20);
        setParl(data);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "83%" }}>
          <Banner banner={banner1} />
          <BookSlider Books={Uponashas} catagory={"উপন্যাসের বই"} />

          <CatagoryButton catagorys={catagorys1} />
          <BookSlider Books={Ruby} title={"ইসলামি উপন্যাস"} />
          <Banner banner={banner3} />
          <BookSlider Books={Shell} title={"সায়েন্স ফিকশন"} />
          <CatagoryIconBnner />

          <BookSlider Books={java} title={"Java"} />
          <BookSlider Books={C} title={"C++"} />

          <CatagoryButton catagorys={catagorys2} />
          <CatagoryButton />
          <BookSlider Books={parl} title={"Parl"} />
          <AuthorSlider  title={"Popular Authors"} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
