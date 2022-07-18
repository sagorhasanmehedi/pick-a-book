import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import ReactLoading from "react-loading";
import { Box } from "@mui/system";

const AddressPrivateRout = ({ children, ...rest }) => {
  const location = useLocation();
  const { Address, loading } = UseAuth();



  




  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center",marginTop:"20%"}}>
        <ReactLoading
          type={"spokes"}
          color={"#33c24d"}
          height={75}
          width={75}
        />
      </Box>
    );
  }
  if (Address) {
    return children;

  }else{
    return <Navigate to='/Address' state={{from:location}} />
  }
};

export default AddressPrivateRout;


