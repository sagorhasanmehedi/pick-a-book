import React, { useState } from "react";

const AllOrderForm = () => {
  const [Image, setImage] = useState();
  const [Pdf, setPdf] = useState();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handlePdf = (e) => {
    setPdf(e.target.files[0]);
  };

  const hadelsubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("image", Image);
    formData.append("pdf",Pdf)


    fetch("https://pick-a-book-v1.herokuapp.com/add_new_book", {
      method: "POST",
      body: formData,
    });
  };
  return (
    <form action="" onSubmit={hadelsubmit}>
      <input
        type="file"
        id=""
        accept="image/*"
        onChange={(e) => handleImage(e)}
      />

      <input type="file" accept=".pdf,.doc" onChange={(e) => handlePdf(e)} />
      <input type="submit" value="submit" />
    </form>
  );
};

export default AllOrderForm;
