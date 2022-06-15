import React from "react";
import EditBookForm from "../component/EditBook/EditBookForm";
import SubNav from "../component/SubNav/SubNav";
import { LayoutContiner } from "../style/MetariulUiStyle";

const EditBooks = () => {
  return (
    <LayoutContiner>
      <SubNav project="EDIT BOOK" />
      <EditBookForm />
    </LayoutContiner>
  );
};

export default EditBooks;
