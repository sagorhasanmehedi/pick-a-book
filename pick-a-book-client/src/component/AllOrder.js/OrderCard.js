import { Box, Button, Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const OrderCard = ({ cart }) => {
  return  (
    <Box
     
      sx={{
        paddingTop: 3,
        paddingBottom: 2,
        paddingLeft: {
          lg: 0,
          xs: 4,
        },
        paddingRight: {
          lg: 0,
          xs: 4,
        },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: {
                lg: "80px",
                xs: "100%",
              },
              width: {
                lg: "80px",
                xs: "100%",
              },
            }}
            alt="The house from the offer."
            src="https://static-01.daraz.com.bd/p/b2bbb9b22368f3eb674ff02508a9487d.jpg"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            textAlign:"center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: {
              xs: 2,
            },
            marginBottom: {
              xs: 1,
            },
          }}
        >
          <Typography variant="body1">
            {cart.book_name} 
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          
          }}
        >
          <Typography variant="body1">
          Quantity: {cart.quantity}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          
          }}
        >
          <Typography variant="body1">
          Delivery on 20 July 2022
          </Typography>
        </Grid>

       
      </Grid>

      
    </Box>
  );
};

export default OrderCard;
