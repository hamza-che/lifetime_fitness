import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SignupFormContextProvider } from "./contexts/SignupFormContext";
import "/src/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SignupFormContextProvider>
        <App />
      </SignupFormContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
