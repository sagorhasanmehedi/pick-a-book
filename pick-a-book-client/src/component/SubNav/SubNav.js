import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import { BoxContainer, SubNabBar } from "../../style/MetariulUiStyle";

const SubNav = ({ project }) => {
  return (
    <SubNabBar>
      <Typography variant="h6" color="secondary">
        {project}
      </Typography>
      <BoxContainer>
        <Link to="/Dashbord/AllBook">
          <HomeIcon color="secondary" />
        </Link>
      </BoxContainer>
    </SubNabBar>
  );
};

export default SubNav;