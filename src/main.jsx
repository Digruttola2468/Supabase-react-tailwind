import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
