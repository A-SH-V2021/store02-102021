import React from "react";
import Hero from "../Hero.jsx";
import { Link } from "react-router-dom";
import {useProductsContext} from '../context/products'
const Home = () => {
  const x=useProductsContext()
  
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
