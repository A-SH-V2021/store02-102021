import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CartEmpty from "../Cart/CartEmpty";
import CartItem from "../Cart/CartItem";
import { useCartContext } from "../context/CartContext";

const Cart = () => {
  let user = false;
  const { cart, total, cartItems } = useCartContext();
  if (cart.length < 1) {
    return <CartEmpty />;
  }

  return (
    <Wrapper>
      <h2>order</h2>
      <div className="items">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item}></CartItem>;
        })}
      </div>
      <h3>total: {total}</h3>
      {user ? (
        <Link to="/Checkout" className="btn btn-primary btn-block">
          Checkout
        </Link>
      ) : (
        <Link to="Login" className="btn btn-primary btn-block">
          Login
        </Link>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: var(--smallWidth);
  margin: 0 auto;
  max-width: var(--maxWidth);
  .items {
    display: grid;
    grid-template-columns: 1fr;
   
  }
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: capitalize;
    transition: all 0.4s ease-in-out;
  }
  h3 {
    text-align: center;
    margin-top: 1rem;
  }
  .btn {
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 768px) {
    max-width: 90%;
    .items {
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 1rem;
    }
    @media screen and (min-width: 1120px) {
    max-width: 90%;
    .items {
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 1rem;
    }
    h2 {
      margin-top: 2rem;
      font-size: 3rem;
    }
    .btn-block {
      max-width: 20%;
      border-radius: 1rem;
    }
  }
  /* @media screen and (min-width: 768px) {
    .items {
      grid-template-columns: 1fr;
    } */
  /* } */
`;
export default Cart;
