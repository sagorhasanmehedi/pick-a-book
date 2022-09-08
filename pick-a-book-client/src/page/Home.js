import { Box } from "@mui/material";
import author1 from "../assets/images/Authors_image/2222ed505a94_1.jpg";
import author2 from "../assets/images/Authors_image/2b36785b9_80983.jpg";
import author3 from "../assets/images/Authors_image/5effa3bfe174_3298.jpg";
import author4 from "../assets/images/Authors_image/6dff69ae5_3182.jpg";
import author5 from "../assets/images/Authors_image/8be72a51f_81400.jpg";
import author6 from "../assets/images/Authors_image/98ec0cea7_4207.jpg";
import author7 from "../assets/images/Authors_image/a721f57c3_79420.jpg";
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

  // all authors
  const Authors = [
    {
      name: "হুমায়ূন আহমেদ",
      img: author1,
    },
    {
      name: "জোবায়ের আল মাহমুদ",
      img: author2,
    },
    {
      name: "সৈয়দ মুজতবা আলী",
      img: author3,
    },
    {
      name: "জহির রায়হান",
      img: author4,
    },
    {
      name: "মিজানুর রহমান আজহারি",
      img: author5,
    },
    {
      name: "তামিম শাহরিয়ার সুবিন",
      img: author6,
    },
    {
      name: "মুনজেরিন শহীদ",
      img: author7,
    },
  ];

  // first book button catagori
  const catagorys1 = [
    { name: "শেষের কবিতা", catagory: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র", catagory: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি", catagory: "মিসির আলি" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
    { name: "জহির রায়হান", catagory: "জহির রায়হান" },
  ];

  // secend book button catagori
  const catagorys2 = [
    { name: "অনুবাদ", catagory: "অনুবাদ" },
    { name: "গণিত", catagory: "গণিত" },
    { name: "থ্রিলার ও অ্যাডভেঞ্চার", catagory: "থ্রিলার ও অ্যাডভেঞ্চার" },
    { name: "রাজনীতি", catagory: "রাজনীতি" },
    { name: "ইতিহাস ও ঐতিহ্য", catagory: "ইতিহাস ও ঐতিহ্য" },
    { name: "ব্যবসা", catagory: "ব্যবসা" },
    { name: "অর্থনীতি", catagory: "অর্থনীতি" },
    { name: "ভ্রমণ", catagory: "ভ্রমণ" },
    { name: "প্রবাস", catagory: "প্রবাস" },
    { name: "প্রযুক্তি", catagory: "প্রযুক্তি" },
    { name: "কমিকস", catagory: "কমিকস" },
    { name: "কৃষি ও কৃষক", catagory: "কৃষি ও কৃষক" },
  ];





  // উপন্যাসের বই
  useEffect(() => {
    axios
      .get("https://bookwebsite.wiztecbd.online/catagory", {
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
      .get("https://bookwebsite.wiztecbd.online/catagory", {
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
      .get("https://bookwebsite.wiztecbd.online/catagory", {
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
      .get("https://bookwebsite.wiztecbd.online/catagory", {
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
      .get("https://bookwebsite.wiztecbd.online/catagory", {
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
      .get("https://bookwebsite.wiztecbd.online/catagory", {
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


  return (
    <div style={{ backgroundColor: "#f1f2f4" }}>
      <Navbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "83%" }}>
          <Banner banner={banner1} catagory={"Motivational and Meditation"}/>
          <BookSlider Books={Uponashas} catagory={"উপন্যাসের বই"} />

          <CatagoryButton catagorys={catagorys1} />
          <BookSlider Books={IslamicUponash} catagory={"ইসলামি উপন্যাস"} />
          <Banner banner={banner3} catagory={"অতিরিক্ত ছাড়"} />
          <BookSlider Books={ScienceFiction} catagory={"সায়েন্স ফিকশন"} />
          <CatagoryIconBnner />

          <BookSlider
            Books={ChotoderBigganBox}
            catagory={"ছোট্ট বিজ্ঞানীদের বিজ্ঞানবাক্স"}
          />
          <BookSlider
            Books={MotivationalMeditation}
            catagory={"Motivational and Meditation"}
          />

          <CatagoryButton catagorys={catagorys2} />
          <CatagoryButton />
          <BookSlider Books={PreOrderBook} catagory={"প্রি-অর্ডারে থাকা বই"} />
          <AuthorSlider Authors={Authors} />
        </Box>
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
