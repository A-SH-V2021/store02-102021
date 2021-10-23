import React from "react";
import styled from "styled-components";
const CartItem = ({ image, title, price, id }) => {
  return (
    <Container>
      <img src={image} alt={title} />
      <div className="title-card">
        <h3>{title}</h3>
        <p>{price} $</p>
      </div>
      <button className="btn">remove</button>
    </Container>
  );
};

const Container = styled.section`
  margin: 0.5rem auto;
  padding: 2rem;
  box-shadow: 5px 10px 8px #888888;
  border-radius: 1rem;
  .title-card {
  }
  .title-card h3 {
    margin: 0px;
  }
  .title-card p {
    margin: 0px;
    font-size: 1.5rem;
    color: #f15025;
  }
  .btn {
    color: white;
    background: red;
    border: none;
    border-radius: 1rem;
    margin-top: 1rem;
    text-align: center;
    border: 1px solid red;
    transition: all 0.3s ease-in-out;
  }
  .btn:hover {
    color: red;
    background-color: white;
    border: 1px solid red;
    transform: translate(5px, 1px);
  }
`;
export default CartItem;
