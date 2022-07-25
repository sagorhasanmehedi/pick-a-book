import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  Chip,
  TableCell,
  tableCellClasses,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#add4ef",
      color: "black",
      border: "none",
      fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      border: "none",
      color: "gray",
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return order?.cart?.map((cart, index) => (
    <StyledTableRow>
      <StyledTableCell
        align="center"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={
            "https://webimages.mongodb.com/_com_assets/cms/l2uxzranknvzkl99w-atlas-db-slalom.svg?ixlib=js-3.6.0&auto=format%2Ccompress&w=689"
          }
          sx={{ mr: 1 }}
        />

        <Box>
          <Typography component="div">বিষাদ সিন্ধু (উপন্যাস)</Typography>

          <Typography component="div">মীর মশাররফ হোসেন</Typography>
        </Box>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Chip label="Pending" color="primary" variant="outlined" />
      </StyledTableCell>

      <StyledTableCell align="center">
        <Typography component="div">Mehedi hasan</Typography>
        <Typography component="div">+8801763553034</Typography>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Link to={`doctorDetails`} style={{ textDecoration: "none" }}>
          <Button color="error" variant="contained" size="small">
            Cancel
          </Button>
        </Link>
      </StyledTableCell>
      <StyledTableCell align="center">
        <Button variant="contained" size="small" color="success">
          Confirm
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  ));
};

export default OrderCard;
