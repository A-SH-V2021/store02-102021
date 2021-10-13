import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Product = ({ id, name, image, price }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className="btn btn-primary">
          details
        </Link>
      </div>
      <footer>
        <p className="title">{name}</p>
        <p className="price">{price}</p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: var(--mainWhite);
  margin-bottom: 2rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  display: grid;
  grid-template-rows: auto 1fr;
  min-height: 19.69rem;

  :hover {
    box-shadow: var(--darkShadow);
  }
  footer {
    padding: 0rem 1rem 1rem 1rem;
    text-align: center;
    letter-spacing: var(--mainSpacing);
    display: grid;
    grid-template-rows: auto auto;

    .title {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.9rem;
      margin-bottom: 0.2rem;
    }
    .price {
      color: var(--primaryColor);
      font-weight: bold;
      margin-bottom: 1rem;
      font-size: 1.1rem;
    }
  }
  .img-container {
    padding: 3rem;
    background: rgba(255, 255, 255, 0.5);
    position: relative;
    img {
      transition: var(--mainTransition);
      max-height: 8rem;
    }
    :hover img {
      opacity: 0.5;
    }
    a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: var(--mainTransition);
    }
    :hover a {
      opacity: 1;
    }
  }
`;
export default Product;
