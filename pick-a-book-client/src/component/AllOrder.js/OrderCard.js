import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const OrderCard = ({ cart, EstimatedDelivery }) => {
  return (
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
            alt="Image not found."
            src={cart.image}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            textAlign: "center",
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
          <Typography variant="body1">{cart.book_name}</Typography>
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
          <Typography variant="body1">Quantity: {cart.quantity}</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          lg={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">
            Estimated Delivery In {EstimatedDelivery}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderCard;
