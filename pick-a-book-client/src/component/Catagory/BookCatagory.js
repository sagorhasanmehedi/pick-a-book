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
    { name: "শেষের কবিতা",catagory:"শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর",catagory:"শেষের কবিতা" },
    { name: "ফেলুদা সমগ্র" ,catagory:"শেষের কবিতা"},
    { name: "মিসির আলি" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "শেষের কবিতা",catagory:"শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" ,catagory:"শেষের কবিতা"},
    { name: "ফেলুদা সমগ্র" ,catagory:"শেষের কবিতা"},
    { name: "মিসির আলি" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়",catagory:"শেষের কবিতা" },
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "শেষের কবিতা" ,catagory:"শেষের কবিতা"},
    { name: "রবীন্দ্রনাথ ঠাকুর" ,catagory:"শেষের কবিতা"},
    { name: "ফেলুদা সমগ্র" ,catagory:"শেষের কবিতা"},
    { name: "মিসির আলি" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়",catagory:"শেষের কবিতা" },
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "শেষের কবিতা",catagory:"শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর",catagory:"শেষের কবিতা" },
    { name: "ফেলুদা সমগ্র" ,catagory:"শেষের কবিতা"},
    { name: "মিসির আলি" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "শেষের কবিতা",catagory:"শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর",catagory:"শেষের কবিতা" },
    { name: "ফেলুদা সমগ্র" ,catagory:"শেষের কবিতা"},
    { name: "মিসির আলি" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "শেষের কবিতা" ,catagory:"শেষের কবিতা"},
    { name: "রবীন্দ্রনাথ ঠাকুর" ,catagory:"শেষের কবিতা"},
    { name: "ফেলুদা সমগ্র" ,catagory:"শেষের কবিতা"},
    { name: "মিসির আলি" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "সত্যজিৎ রায়" ,catagory:"শেষের কবিতা"},
    { name: "শেষের কবিতা" ,catagory:"শেষের কবিতা"},
    { name: "রবীন্দ্রনাথ ঠাকুর" ,catagory:"শেষের কবিতা"},
    { name: "ফেলুদা সমগ্র" ,catagory:"শেষের কবিতা"},
    { name: "মিসির আলি" ,catagory:"শেষের কবিতা"},
 
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
            onClick={()=>handelAllbook(C.catagory)}
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
