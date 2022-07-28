import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import ReactLoading from "react-loading";
import { Box } from "@mui/system";


const AdminRoute = ({ children, ...rest }) => {
  const location = useLocation();
  const { user, loading } = UseAuth();

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20%" }}>
        <ReactLoading
          type={"spokes"}
          color={"#33c24d"}
          height={75}
          width={75}
        />
      </Box>
    );
  }
  if (user?.Rool === "Admin") {
    return children;
  } else {
    // return ;
    return <Navigate to="/Login" state={{ from: location }} />;
  }
};

export default AdminRoute;
