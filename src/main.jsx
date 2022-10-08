import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MembersPlansContextProvider } from "./contexts/MembersPlansContext";
import "/src/index.css";
import App from "./App";
import { SignupFormContextProvider } from "./contexts/SignupFormContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MembersPlansContextProvider>
        <SignupFormContextProvider>
          <App />
        </SignupFormContextProvider>
      </MembersPlansContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
