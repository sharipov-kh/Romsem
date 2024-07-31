import React from "react";
import Home from "./pages/Home/Home";
import "./App.scss";
import SideBar from "./components/main/SideBar/SideBar";
import Cart from "./components/main/Cart/Cart";

const App = () => {
  return (
    <>
      <div className="main">
        <SideBar />
        <div className="content">
          <Home />
        </div>
        <Cart />
      </div>
    </>
  );
};

export default App;
