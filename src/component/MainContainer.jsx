import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function MainContainer() {
  const { isMenuOpen } = useSelector((state) => state.isMenuOpen);

  return (
    <div
      className={`grid grid-flow-col grid-cols-[225px_minmax(900px,${
        isMenuOpen ? "_1fr" : ""
      })] h-[calc(100%-50px)] fixed`}
    >
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
