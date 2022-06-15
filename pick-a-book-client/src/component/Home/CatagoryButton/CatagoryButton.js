import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CatagoryButton.css";

const CatagorySlice = ({catagorys}) => {
  const [allCatagory,setAllCatagory]=useState([])
  let navigate = useNavigate();

 // view all book from this catagory
 const handelAllbook = (catagory) => {
  navigate(`/HomeAllBook/${catagory}`);
};


  useEffect(() => {
    setAllCatagory(catagorys)

  }, [])
  

 


  return (
    <div className="Catagory-slice">
      <Grid container spacing={2}>
        {allCatagory?.map((C, index) => (
          <Grid
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
            item
            md={2}
            sm={12}
            xs={12}
          >
            <button onClick={() => handelAllbook(C.catagory)} className="slide">
              {C.name}
            </button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CatagorySlice;
