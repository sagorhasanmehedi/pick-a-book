import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Radio,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

export const BoxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const BoxContainerColoum = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export const InVoiceContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "18px",
}));

export const BigButtonMake = styled(Button)(({ theme }) => ({
  padding: "8px 12px",
  color: "white",
  background: "#7480FF",
  ":hover": {
    color: "black",
    background: "#7480FF",
  },
}));

export const LayoutRoot = styled(Box)(({ theme }) => ({
  width: {
    lg: "calc(100% - 280px)",
  },
  height: "calc(100vh)",
  overflow: "auto",
  paddingTop: "64px",
  background: theme.background.layoutContainer,
  [theme.breakpoints.up("lg")]: {
    paddingLeft: 280,
  },
}));

export const LayoutContiner = styled(Box)(({ theme }) => ({
  margin: "45px",
  padding: "0px 30px 30px",
  borderRadius: "15px",
  backgroundColor: theme.background.primary,
}));

export const NavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.background.layoutRoot,
  boxShadow: theme.shadows[3],
  left: {
    lg: 280,
  },
  width: {
    lg: "calc(100% - 280px)",
  },
}));

export const SubNabBar = styled(Box)(({ theme }) => ({
  color: "#A4A6B3",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px 0px",
}));

export const MenuItemMake = styled(MenuItem)(({ theme }) => ({
  color: "#A4A6B3",
}));

export const useStyle = makeStyles((theme) => {
  return {
    sidebar: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      // paddingTop: "64px",
      backgroundColor: theme.background.sideBar,
    },
  };
});

export const TextFieldMake = styled(TextField)(({ theme }) => ({
  "& label": {
    color: "#A4A6B3",
  },
  "& label.Mui-focused": {
    color: "#ffffff",
    backgroundColor: "#3F51B5",
    padding: "0px 15px",
    borderRadius: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #A4A6B3",
    },

    "&:hover fieldset": {
      border: "1px solid gray",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid gray",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "#A4A6B3",
  },
  marginTop: "10px",
}));

export const SendButton = styled(Button)(({ theme }) => ({
  width: "130px",
  height: "48px",
  padding: "10px",
  color: "white",
  backgroundColor: "#3fa142",
  "&:hover": {
    background: "#026806",
    color: "white",
  },
}));
export const CancleButton = styled(Button)(({ theme }) => ({
  width: "130px",
  height: "48px",
  padding: "10px",
  marginLeft: "30px",
  backgroundColor: "#fa9718",
  color: "white",
  "&:hover": {
    background: "#804903",
    color: "white",
  },
}));
export const CelectButtonStyle = styled(Button)({
  border: "2px solid #3F51B5",
  color: "#FBFBFB",
  backgroundColor: "#3F51B5",
  padding: "0px 10px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "700",
  display: "flex",
  alignContent: "flex-start",
  textTransform: "capitalize",
  hight: "27px",
});
export const UplodeButton = styled(Button)(({ theme }) => ({
  width: "130px",
  backgroundColor: "#3F51B5",
  color: "white",
  borderRadius: "4px",
  padding: "11px",
  border: "none",
  cursor: "pointer",
  overflow: "hidden",

  [theme.breakpoints.down("sm")]: {
    marginTop: "15px",
  },

  "&:hover": {
    background: "#3F51B5",
    color: "primary",
  },
}));

export const StyledButton = styled(Radio)({
  margin: 0,
  padding: 0,
  display: "flex",
  justifyContent: "center",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

// modal style
export const ModalHeading = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  borderBottom: "1px solid #e2e2e2",
  paddingBottom: "10px",
  marginBottom: "7px",
});

export const ModalHeadingName = styled(Typography)({
  fontSize: "17px",
  fontWeight: "550",
  color: "#333333",
});
export const ModalHeadingCancel = styled(Typography)({
  color: "#0397d3",
  borderBottom: "1px solid #0397d3",
  cursor: "pointer",
});
export const AddressTextField = styled(TextField)(({ theme }) => ({
  height: "45px",
  width: "100%",
  "& label": {
    color: "#495057",
  },
  "& label.Mui-focused": {
    color: "#495057",
    backgroundColor: "#3F51B5",
    padding: "0px 15px",
    borderRadius: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #e2e2e2",
    },

    "&:hover fieldset": {
      border: "1px solid #e2e2e2",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #7a7575",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "#495057",
  },
  marginTop: "10px",
}));
export const AddressTextAria = styled(TextField)(({ theme }) => ({
  width: "100%",
  "& label": {
    color: "#495057",
  },
  "& label.Mui-focused": {
    color: "#495057",
    backgroundColor: "#3F51B5",
    padding: "0px 15px",
    borderRadius: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #7a7575",
    },

    "&:hover fieldset": {
      border: "1px solid #7a7575",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #7a7575",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "#495057",
  },
  marginTop: "10px",
}));

export const ModalButton = styled(Button)({
  marginTop: "30px",
  backgroundColor: "#0397d3",
  color: "#FFFFFF",
  fontSize: "110%",
  width: "100%",
  "&:hover": {
    background: "#0397d9",
  },
});

export const MyAcountInfo = styled(Typography)({
  fontSize: "16px",
  paddingBottom: "0.25rem",

  marginBottom: "5px",
  marginTop: "19px",
  color: "#333333",
  textAlign: "left",
});
export const MyAcountInput = styled(TextField)({
  width: "100%",
  "& label": {
    color: "#495057",
  },
  "& label.Mui-focused": {
    color: "#495057",
    backgroundColor: "#f9f9f9",
    padding: "0px 15px",
    borderRadius: "20px",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "1px solid #ced4da",
    },

    "&:hover fieldset": {
      border: "1px solid #ced4da",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #ced4da",
    },
  },

  "& .MuiOutlinedInput-input": {
    color: "#495057",
    backgroundColor: "#f9f9f9",
  },
});

// modal style
export const CashOnFormModalButton = styled(Button)({
  width: "48%",
  height: "40px",

  fontSize: "14px",
  color: "#fff",
  });


  export const TableBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    border: '1px solid #eaeaea',
    borderRadius: '5px',
}));

export const TableHeading = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#f8f9fa",
  borderRadius: 'none'
}));