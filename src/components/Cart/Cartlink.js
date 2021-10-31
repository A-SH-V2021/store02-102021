import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/CartContext";
const Cartlink = () => {
  const { cartItems } = useCartContext();
  return (
    <Wrapper>
      <Link to="/Cart">cart</Link>
      <span>{cartItems}</span>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  span {
    width: 2rem;
    text-align: center;
    position: absolute;
    top: -1.7rem;
    left: 1.5rem;
    background: #f15025;
    border-radius: 50%;
    color: white;
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    span {
      top: -1.4rem;
      left: 3rem;
    }
  }
`;
export default Cartlink;
