import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderCard from "../component/AllOrder.js/OrderCard";
import SubNav from "../component/SubNav/SubNav";
import { LayoutContiner } from "../style/MetariulUiStyle";
import axios from "axios";

const AllOeder = () => {
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/adminAllOrder`)
      .then((response) => {
        // handle success
        setOrders(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <LayoutContiner>
      <SubNav project={"ALL ORDER"} />

      {Orders.map((order, index) => (
        <Box
          sx={{
            backgroundColor: "#eff1f5",
            marginBottom: 4,
            borderRadius: 2,
          }}
          key={index}
        >
          <Box
            sx={{
              display: {
                lg: "flex",
              },
              justifyContent: "space-between",
              alignItems: "center",
              padding: 2,
            }}
          >
            <Box
              sx={{
                display: {
                  lg: "flex",
                },
                gap: 4,
                alignItems: "center",
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
              <Typography
                sx={{
                  marginTop: {
                    lg:0,
                    xs: 2,
                  },
                  
                }}
                variant="body1"
              >
                <Chip variant="outlined" color="error" label={order.status} />
              </Typography>
            </Box>
            <Box>
              <Tooltip
                title="This option is currently unavailable"
                placement="top"
              >
                <Typography
                  sx={{
                    marginTop: {
                      lg:0,
                      xs: -4,
                    },
                    textAlign:{
                      xs:"center"
                    }
                  }}
                  variant="body1"
                  color={"#1a9cb7"}
                >
                  Details
                </Typography>
              </Tooltip>
            </Box>
          </Box>
          <Divider sx={{  borderColor: "#d2d4da" }}/>

          <OrderCard order={order} />

          <Box
            sx={{
              backgroundColor: "#eff1f5",

              borderRadius: 2,
            }}
          >
            <Divider />
            <Box
              sx={{
                padding: 2,
                display: "flex",
                justifyContent: {
                  lg: "end",
                  xs: "center",
                },
                gap: 4,
                alignItems: "center",
              }}
            >
              <Button size="small" variant="contained" color="error">
                Cancel
              </Button>
              <Button
                sx={{
                  backgroundColor: "#4d98ca",
                  ":hover": {
                    backgroundColor: "#25638d",
                  },
                }}
                size="small"
                variant="contained"
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      ))}
    </LayoutContiner>
  );
};

export default AllOeder;
