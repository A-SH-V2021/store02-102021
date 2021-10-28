import React from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products";
import { useCartContext } from "../context/CartContext";

const Productdetails = () => {
  const { products } = useProductsContext();
  const { addToCart } = useCartContext();
  const { id } = useParams();
  const history = useHistory();
  const product = products.find((item) => item.id === id);

  const { image, name, description, price } = product;

  return (
    <Wrapper>
      <img src={image} alt={name} className="single-product-image" />
      <article>
        <h1>{name}</h1>
        <h2>{price}$</h2>
        <p>{description}</p>
        <button
          className="btn btn-primary"
          onClick={() => {
            addToCart(id); history.push("/cart");
          }}
        >
          add to cart
        </button>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: var(--smallWidth);
  max-width: var(--fullWidth);
  margin: 4rem auto;

  .single-product-image {
    max-width: 25rem;
    align-self: center;
    margin: 0 auto;
    margin-bottom: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  article {
    margin-bottom: 3rem;
  }
  h1 {
    text-transform: capitalize;
    font-size: 2.3rem;
    letter-spacing: var(--mainSpacing);
  }
  h2 {
    color: var(--primaryColor);
  }
  p {
    line-height: 2;
    letter-spacing: 1px;
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 3fr;
    column-gap: 3rem;
  }
`;
export default Productdetails;
