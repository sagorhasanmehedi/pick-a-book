import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, ListItem, Typography } from "@mui/material";

export const NavItem = ({ href, icon, title, onClose }) => {
  const active = false;

  return (
    <ListItem
      disableGutters
      sx={{
        display: "flex",
        mb: 0.5,
        py: 0,
        px: 2,
      }}
    >
    

      <Link
        to={href}
        style={{ diplay: "block", width: "100%", textDecoration: "none" }}
      >
        <Button
          component="button"
          startIcon={icon}
          onClick={onClose}
          disableRipple
          sx={{
            background: active && "info",
            borderRadius: 1,
            color: active ? "primary" : "secondary.main",
            fontWeight: active && "fontWeightBold",
            justifyContent: "flex-start",
            px: 3,
            textAlign: "left",
            textTransform: "none",
            width: "100%",
            "& .MuiButton-startIcon": {
              color: "white",
            },
            "&:hover": {
              background: "info",
              color: "primary",
            },
          }}
        >
          <Box sx={{ flexGrow: 1, fontSize: "medium", color: "white" }}>
            {title}
          </Box>
        </Button>
      </Link>
    </ListItem>
  );
};
