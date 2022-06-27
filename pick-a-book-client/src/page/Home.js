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
  const [IslamicUponash, setIslamicUponash] = useState([]);
  const [ScienceFiction, setScienceFiction] = useState([]);
  const [ChotoderBigganBox, setChotoderBigganBox] = useState([]);
  const [MotivationalMeditation, setMotivationalMeditation] = useState([]);
  const [PreOrderBook, setPreOrderBook] = useState([]);


  // first book button catagori
  const catagorys1 = [
    { name: "শেষের কবিতা", catagory: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র", catagory: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি", catagory: "মিসির আলি" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
  ];

  // secend book button catagori
  const catagorys2 = [
    { name: "শেষের কবিতা", catagory: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র", catagory: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি", catagory: "মিসির আলি" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
    { name: "শেষের কবিতা", catagory: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র", catagory: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি", catagory: "মিসির আলি" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
  ];

  // উপন্যাসের বই
  useEffect(() => {
    axios
      .get("https://pick-a-book-v1.herokuapp.com/catagory", {
        params: {
          CATAGORY: "উপন্যাসের বই",
        },
      })
      .then((response) => {
        setUponashas(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  // ইসলামি উপন্যাস
  useEffect(() => {
    axios
      .get("https://pick-a-book-v1.herokuapp.com/catagory", {
        params: {
          CATAGORY: "ইসলামি উপন্যাস",
        },
      })
      .then((response) => {
        setIslamicUponash(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  // সায়েন্স ফিকশন
  useEffect(() => {
    axios
      .get("https://pick-a-book-v1.herokuapp.com/catagory", {
        params: {
          CATAGORY: "সায়েন্স ফিকশন",
        },
      })
      .then((response) => {
        setScienceFiction(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);


  // ছোট্ট বিজ্ঞানীদের বিজ্ঞানবাক্স
  useEffect(() => {
    axios
      .get("https://pick-a-book-v1.herokuapp.com/catagory", {
        params: {
          CATAGORY: "ছোট্ট বিজ্ঞানীদের বিজ্ঞানবাক্স",
        },
      })
      .then((response) => {
        setChotoderBigganBox(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

 // Motivational and Meditation
  useEffect(() => {
    axios
      .get("https://pick-a-book-v1.herokuapp.com/catagory", {
        params: {
          CATAGORY: "Motivational and Meditation",
        },
      })
      .then((response) => {
        setMotivationalMeditation(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

 // প্রি-অর্ডারে থাকা বই
 useEffect(() => {
  axios
    .get("https://pick-a-book-v1.herokuapp.com/catagory", {
      params: {
        CATAGORY: "প্রি-অর্ডারে থাকা বই",
      },
    })
    .then((response) => {
      setPreOrderBook(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {});
}, []);



  
  // Navbar.classList.add("sticky") : Navbar.classList.remove("sticky")
  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "83%" }}>
          <Banner banner={banner1} />
          <BookSlider Books={Uponashas} catagory={"উপন্যাসের বই"} />

          <CatagoryButton catagorys={catagorys1} />
          <BookSlider Books={IslamicUponash} catagory={"ইসলামি উপন্যাস"} />
          <Banner banner={banner3} catagory={"অতিরিক্ত ছাড়"}/>
          <BookSlider Books={ScienceFiction} catagory={"সায়েন্স ফিকশন"} />
          <CatagoryIconBnner />

          <BookSlider Books={ChotoderBigganBox} catagory={"ছোট্ট বিজ্ঞানীদের বিজ্ঞানবাক্স"} />
          <BookSlider Books={MotivationalMeditation} catagory={"Motivational and Meditation"} />

          <CatagoryButton catagorys={catagorys2} />
          <CatagoryButton />
          <BookSlider Books={PreOrderBook} catagory={"প্রি-অর্ডারে থাকা বই"} />
          <AuthorSlider title={"Popular Authors"} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
