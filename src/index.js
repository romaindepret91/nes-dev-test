import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Context Provider for accessory data
import AccessoriesContextProvider from "./context/AccessoriesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <meta
        name="description"
        content="Balance out the flavour of your coffee with Nespresso’s collection of chocolates, Amaretti biscuits and sugar sticks. Click to view our Food and Bite products."
      />
      <meta
        property="og:title"
        content="Food & Bites | Chocolates, Sugars and Biscuits | Nespresso Canada"
      />
      <meta
        property="og:url"
        content="https://www.nespresso.com/ca/en/accessories/food-and-bites"
      />
      <meta
        property="og:description"
        content="Balance out the flavour of your coffee with Nespresso’s collection of chocolates, Amaretti biscuits and sugar sticks. Click to view our Food and Bite products."
      />
      <title>
        Food & Bites | Chocolates, Sugars and Biscuits | Nespresso Canada
      </title>
    </head>
    <AccessoriesContextProvider>
      <App />
    </AccessoriesContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
