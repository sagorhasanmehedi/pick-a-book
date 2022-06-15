import React from "react";
import { useState } from "react";
import { NavBar } from "./Navbar";
import { LayoutRoot } from "../../style/MetariulUiStyle";
import SideBar from "./SideBar";
import { Outlet} from "react-router-dom";


const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <NavBar sidebartoggle={() => setSidebarOpen(!isSidebarOpen)} />
      <SideBar
        onClose={() => setSidebarOpen(!isSidebarOpen)}
        open={isSidebarOpen}
      />
      <LayoutRoot>
        < Outlet/>
      </LayoutRoot>
    </>
  );
};

export default Layout;
