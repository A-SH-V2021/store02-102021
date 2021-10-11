import React, { Component } from "react";
import Hero from "../Hero.jsx";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products";

// Component
import Loading from "../Loading";
const Home = () => {
  const { loading } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
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
