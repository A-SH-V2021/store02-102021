import React, { Component } from "react";
import Hero from "../Hero.jsx";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FeaturedProducts from "../product/FeaturedProducts.js";

// Component

const Home = () => {
  return (
    <Wrapper>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          our product
        </Link>
      </Hero>
      <FeaturedProducts />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 0px 1.5rem;
  @media screen and (min-width: 768px) {
    max-width: 95%;
    margin: auto;
  }
`;

export default Home;
