import React, { useState } from "react";
import AddNewBookForm from "../component/AddNewBooks/AddNewBookForm";
import SubNav from "../component/SubNav/SubNav";
import { LayoutContiner } from "../style/MetariulUiStyle";
import Swal from "sweetalert2";

const AddNewBook = () => {
  const [Data, setData] = useState();

  const handelFormSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    if (!Data.Image) {
      return;
    }

    formData.append("Image", Data.Image);

    console.log(formData)

    // formData.append("Book_Name", Data.Book_Name);
    // formData.append("Sub_Title", Data.Sub_Titel);
    // formData.append("Author_Name", Data.Author_Name);
    // formData.append("Price", Data.Price);
    // formData.append("Offer_Price", Data.Offer_Price);
    // formData.append("Catagory", Data.Catagory);
    // formData.append("Entry_date", Data.Entry_date);
    // formData.append("Offer_Name", Data.Offer_Name);
    // formData.append("Offer_Percentage", Data.Offer_Percentage);
    // formData.append("Publication_Name", Data.Publication_Name);
    // formData.append("Description", Data.Description);
    // formData.append("Stock", Data.Stock);
    // formData.append("Email", Data.Email);
    // formData.append("Image", Data.Image);
    // formData.append("Pdf", Data.Pdf);

    // fetch("http://localhost:7000/add_new_book", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data)
    //     if (data.insertedId) {
    //       Swal.fire({
    //         icon: "success",
    //         title: "details have been saved successfully.!",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <LayoutContiner>
      <SubNav project="ADD BOOK" />
      <AddNewBookForm
        setData={setData}
        Data={Data}
        handelFormSubmit={handelFormSubmit}
      />
    </LayoutContiner>
  );
};

export default AddNewBook;
