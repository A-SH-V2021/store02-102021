import React from "react";
import ReactDOM from "react-dom";
import { ProductsProvider } from "./components/context/products";
import { CartProvider } from "./components/context/CartContext";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <ProductsProvider>
    <CartProvider>
      <Router>
        <App />
      </Router>
    </CartProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
