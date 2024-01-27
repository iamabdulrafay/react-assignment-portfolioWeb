import React, { useState } from "react";
import { Outlet, useOutlet } from "react-router";
import Navbar from "./src/components/Navbar/NAvbar";
import Footer from "./src/components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Layout;
