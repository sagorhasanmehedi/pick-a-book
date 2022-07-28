import { Grid } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import AllAdmin from "../component/MakeAdmin/AllAdmin";
import MakeAdminForm from "../component/MakeAdmin/MakeAdminForm";
import SubNav from "../component/SubNav/SubNav";
import { LayoutContiner } from "../style/MetariulUiStyle";

const MakeAdmin = () => {
  const [Admin, setAdmin] = useState([]);
  const [isAdmin, setisAdmin] = useState(true);

  React.useEffect(() => {
    axios
      .get("http://pickabook.rpi.gov.bd/admin")
      .then((response) => {
        setAdmin(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isAdmin]);

  return (
    <LayoutContiner>
      <SubNav project="MAKE ADMIN" />

      <Grid container>
        <Grid item xs={12} lg={6} sx={{marginBottom:{
          xs:3
        }}}>
          <MakeAdminForm setisAdmin={setisAdmin} isAdmin={isAdmin} />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AllAdmin Admin={Admin} />
        </Grid>
      </Grid>
    </LayoutContiner>
  );
};

export default MakeAdmin;
