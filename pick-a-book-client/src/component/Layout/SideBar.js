import React from "react";
import { Box, Divider, Drawer, Typography, useMediaQuery } from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import AddchartIcon from "@mui/icons-material/Addchart";
import AddTaskIcon from "@mui/icons-material/AddTask";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { NavItem } from "./NavItem";
import { useStyle } from "../../style/MetariulUiStyle";

const items = [
  {
    href: "AllBook",
    icon: <CollectionsBookmarkIcon fontSize="small" />,
    title: "All Book",
  },
  {
    href: "addnewbook",
    icon: <AddchartIcon fontSize="small" />,
    title: "Add New",
  },
  {
    href: "editBook",
    icon: <AddTaskIcon fontSize="small" />,
    title: "Edit Book",
  },
  {
    href: "allOrder",
    icon: <BorderAllIcon fontSize="small" />,
    title: "All Order",
  },
  {
    href: "makeAdmin",
    icon: <AdminPanelSettingsIcon fontSize="small" />,
    title: "Make Admin",
  },
  {
    href: "/",
    icon: <HouseIcon fontSize="small" />,
    title: "Home Page",
  },
];

const SideBar = ({ open, onClose }) => {
  const style = useStyle();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"), {
    defaultMatches: true,
    noSsr: false,
  });

  const content = (
    <>
      <Box className={style.sidebar}>
        <Typography
          sx={{
            textAling: "center",
            margin: "11px 0 11px 40px",
            fontSize: "28px",
            cursor: "pointer",
            color: "white",
           
          }}
        >
          Pick A Book
        </Typography>
        <Divider sx={{ marginBottom: "50px", borderColor: "#7f7878" }} />
        <Box
          sx={{
            flexGrow: 1,
            color: "wheat",
          }}
        >
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
              onClose={onClose}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        variant="permanent"
        anchor="left"
        open
        PaperProps={{
          sx: {
            width: 280,
            border: "none",
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      variant="temporary"
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          width: 280,
          border: "none",
        },
      }}
    >
      {content}
    </Drawer>
  );
};

export default SideBar;
