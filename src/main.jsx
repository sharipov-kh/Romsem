import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/normalize.scss";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./store/AppContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>
);
