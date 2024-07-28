import { Outlet } from "react-router-dom";
import Footer from "../../../Footer/Footer";

const ContentLoyaut = (props) => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default ContentLoyaut;
