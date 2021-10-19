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
      <h2>your Cart</h2>
      {cart.map((item) => {
        return <CartItem key={item.id} {...item}></CartItem>;
      })}
      <h2>total: {total}</h2>
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
  h2 {
    margin-bottom: 2rem;
    text-align: center;
    text-transform: capitalize;
  }
`;
export default Cart;
