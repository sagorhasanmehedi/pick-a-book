import React, { useState } from "react";

const AllOrderForm = () => {
  const [Image, setImage] = useState();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const hadelsubmit = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("image", Image);

    fetch("http://localhost:7000/add_new_book", {
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
        <input type="submit" value="submit" />
      </form>
  );
};

export default AllOrderForm;
