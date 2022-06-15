import React from "react";
import "./AllAuthorCom.css";
import authorimage from "../../assets/images/2.jpg";

const AllAuthor = () => {
  const catagory = [
    { name: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি" },
    { name: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়" },
    { name: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি" },
    { name: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়" },
    { name: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি" },
    { name: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়" },
    { name: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি" },
    { name: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়" },
    { name: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি" },
    { name: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়" },
    { name: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি" },
    { name: "সত্যজিৎ রায়" },
    { name: "সত্যজিৎ রায়" },
    { name: "শেষের কবিতা" },
    { name: "রবীন্দ্রনাথ ঠাকুর" },
    { name: "ফেলুদা সমগ্র" },
    { name: "মিসির আলি" },
  ];
  return (
    <div className="authors">
      {catagory.map((C, index) => (
        <div key={index}>
          <img alt="" src={authorimage} />
          <p>{C.name}</p>
        </div>
      ))}
    </div>
  );
};

export default AllAuthor;
