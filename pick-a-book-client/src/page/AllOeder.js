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
import Swal from "sweetalert2";

const AllOeder = () => {
  const [Orders, setOrders] = useState([]);
  const [condition, setcondition] = useState(true);

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
  }, [condition]);

  // delete order
  const handelOrderDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this! ",

      showCancelButton: true,
      confirmButtonColor: "Crimson",
      cancelButtonColor: " LightSeaGreen",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.value) {
        axios
          .delete(`http://localhost:7000/deleteOrder/${id}`)
          .then(function (response) {
            if (response.data.deletedCount) {
              setcondition(!condition);
              Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: "Order has been deleted.",
                timer: 1500,
                showCancelButton: false,
                showConfirmButton: false,
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  };

  // confirm order
  const handelConfirm = (id) => {
    axios
      .put(`http://localhost:7000/confirmOrder/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          setcondition(!condition);
          Swal.fire({
            icon: "success",
            title: "Confirmed!",
            text: "Order has been Confirmed.",
            timer: 1500,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      })
      .catch((error) => console.log(error));
  };

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
                    lg: 0,
                    xs: 2,
                  },
                }}
                variant="body1"
              >
                {order.status === "Pending" ? (
                  <Chip variant="outlined" color="error" label={order.status} />
                ) : (
                  <Chip label="success" color="success" variant="outlined" />
                )}
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
                      lg: 0,
                      xs: -4,
                    },
                    textAlign: {
                      xs: "center",
                    },
                  }}
                  variant="body1"
                  color={"#1a9cb7"}
                >
                  Details
                </Typography>
              </Tooltip>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "#d2d4da" }} />

          {order.Cart.map((cart, index) => (
            <OrderCard cart={cart} key={index} />
          ))}

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
              <Button
                onClick={() => handelOrderDelete(order._id)}
                size="small"
                variant="contained"
                color="error"
              >
                Cancel
              </Button>
              <Button
                onClick={() => handelConfirm(order._id)}
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
