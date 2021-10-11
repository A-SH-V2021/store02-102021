import React from "react";
import ReactDOM from "react-dom";
import  {ProductsProvider}  from "./components/context/products";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ProductsProvider>
    <Router>
      <App />
    </Router>
  </ProductsProvider>,
  document.getElementById("root")
);
