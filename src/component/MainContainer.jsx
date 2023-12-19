import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function MainContainer() {
  return (
    <div className="grid grid-flow-col grid-cols-[225px_minmax(900px,_1fr)]">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default MainContainer;
