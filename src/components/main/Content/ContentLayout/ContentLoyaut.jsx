import { Outlet } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import React from "react";
const ContentLoyaut = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default ContentLoyaut;
