import React from "react";
import "./CatagoryIconBnner.css";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import icon1 from "../../../assets/images/catagory icon/rok-icon-college.png";
import icon2 from "../../../assets/images/catagory icon/rok-icon-engg.png";
import icon3 from "../../../assets/images/catagory icon/rok-icon-medical.png";
import icon4 from "../../../assets/images/catagory icon/rok-icon-nursing.png";
import icon5 from "../../../assets/images/catagory icon/rok-icon-school.png";
import icon6 from "../../../assets/images/catagory icon/rok-icon-university.png";

const CatagoryIconBnner = () => {
  let navigate = useNavigate();

  // view all book from this catagory
  const handelAllbook = (catagory) => {
    navigate(`/HomeAllBook/${catagory}`);
  };

  const allCatagory = [
    {
      name: "College",
      logo: icon1,
      background: "#e0e7f8",
      catagory: "College",
    },
    {
      name: "Engg",
      logo: icon2,
      background: "#f3f3f3",
      catagory: "Engg",
    },
    {
      name: "Medicel",
      logo: icon3,
      background: "#fff3d6",
      catagory: "Medicel",
    },
    {
      name: "Nursing",
      logo: icon4,
      background: "#cceced",
      catagory: "Nursing",
    },
    {
      name: "School",
      logo: icon5,
      background: "#faeded",
      catagory: "School",
    },
    {
      name: "University",
      logo: icon6,
      background: "#9bc1f9",
      catagory: "University",
    },
  ];

  return (
    <div className="catagory-icons">
      <p className="catagory-icons-title">Browse by Exam</p>
      <Grid container rowSpacing={{ xs: 10, sm: 10 }} columnSpacing={{ md: 5 }}>
        {allCatagory.map((catagory, index) => (
          <Grid key={index} item xs={12} md={2}>
            <Box
              sx={{
                backgroundColor: `${catagory.background}`,
                height: "180px",
                borderRadius: "8px 8px 0 0",
              }}
            >
              <Box
                sx={{
                  height: "180px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img alt="" src={catagory.logo} />
              </Box>
              <button onClick={() => handelAllbook(catagory.catagory)}>
                {catagory.name}
              </button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CatagoryIconBnner;
