import { Box, Chip, Divider, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";

const MyAllOrder = ({ Orders }) => {
  return Orders?.map((order, index) => (
    <Box
      sx={{
        backgroundColor: "white",
        marginBottom: 4,
      }}
      key={index}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
        }}
      >
        <Box>
          <Typography variant="subtitle1">
            Order{" "}
            <Typography display={"inline"} color={"#1a9cb7"}>
              #{order._id}
            </Typography>
          </Typography>
          <Typography variant="body2" color={"#757575"}>
            Placed on {order.PlacedDate}
          </Typography>
        </Box>
        <Box>
          <Tooltip title="This option is currently unavailable" placement="top">
            <Typography variant="body1" color={"#1a9cb7"}>
              Manage
            </Typography>
          </Tooltip>
        </Box>
      </Box>
      <Divider />

      {order.Cart.map((cart, index) => (
        <Box
          key={index}
          sx={{
            paddingTop: 4,
            paddingBottom: 1,
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: {
                  xs: 2,
                },
              }}
            >
              <Typography variant="body1">{cart.book_name}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              lg={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: {
                  xs: 2,
                },
              }}
            >
              <Typography variant="body1">Qty: {cart.quantity}</Typography>
            </Grid>
            <Grid
              item
              xs={6}
              lg={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: {
                  xs: 2,
                },
              }}
            >
              {order.status === "Pending" ? (
                <Chip variant="outlined" color="error" label={order.status} />
              ) : (
                <Chip label="success" color="success" variant="outlined" />
              )}
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
              <Typography variant="body1">Delivery on 20 July 2022</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  ));
};

export default MyAllOrder;

// Confirmed
// Pending
