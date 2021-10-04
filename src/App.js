import React from "react";
import { Switch, Route } from "react-router-dom";

// components

// pages
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Products from "./components/pages/products";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import Error from "./components/pages/Error";
import Productdetails from "./components/pages/Productdetails";
import Checkout from "./components/pages/Chechout";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Login" component={Login} />
      <Route path="/Cart" component={Cart} />
      <Route path="/products" exact component={Products} />
      <Route path="/products/:id" component={Productdetails} />
      <Route path="/Checkout" component={Checkout} />
      <Route path="*" component={Error} />
    </Switch>
  );
};

export default App;
