import React from "react";
import "./BookCatagory.css";
import catagorylogo from "../../assets/images/catagory icon/custom-category.png";
import { useNavigate } from "react-router-dom";

const BookCatagory = () => {
  let navigate = useNavigate();

  // view all book from this catagory
  const handelAllbook = (catagory) => {
    navigate(`/HomeAllBook/${catagory}`);
  };

  const catagory = [
    { name: "শেষের কবিতা", catagory: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর", catagory: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র", catagory: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি", catagory: "মিসির আলি" },
    { name: "সত্যজিৎ রায়", catagory: "সত্যজিৎ রায়" },
    { name: "জহির রায়হান", catagory: "জহির রায়হান" },
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
    { name: "ইংরেজি ভাষার বই", catagory: "ইংরেজি ভাষার বই" },
    { name: "আইন ও বিচার", catagory: "আইন ও বিচার" },

    

  ];
  return (
    <div className="book-Catagory">
      {catagory.map((C, index) => (
        <div
          key={index}
          sx={{ display: "flex", justifyContent: "center" }}
          item
          md={2}
          sm={12}
          xs={12}
        >
          <button
            onClick={() => handelAllbook(C.catagory)}
            style={{
              backgroundImage: `url(${catagorylogo})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {C.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookCatagory;
