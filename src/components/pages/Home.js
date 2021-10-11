import React, { Component } from "react";
import Hero from "../Hero.jsx";
import { Link } from "react-router-dom";


// Component

const Home = () => {
   
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our product
        </Link>
      </Hero>
    </>
  );
};

export default Home;
