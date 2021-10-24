import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const CartItem = ({ image, title, price, id }) => {
  return (
    <Container>
      <div className="">
        <img src={image} alt={title} />
        <div className="title-card">
          <h3>{title}</h3>
          <p>{price} $</p>
        </div>
        <button className="btn">remove</button>
      </div>
      <div className="amount">
        <button>
          <AiOutlineArrowUp className="incraise" />
        </button>
        <p>1</p>
        <button>
          <AiOutlineArrowDown className="decraise" />
        </button>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
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
    border-radius: 1rem;
    margin-top: 1rem;
    text-align: center;
    border: 1px solid red;
    transition: all 0.3s ease-in-out;
    background-color: red;
    box-shadow: 12px 12px 16px 0 rgba(0, 0, 0, 0.25),
      -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
    border-radius: 50px;
  }
  .btn:hover {
    color: red;
    background-color: white;
    border: 1px solid red;
    transform: translate(3px, 1px);
  }
  .amount {
    width: 2rem;
    height: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-around;
  }
  .amount p {
    background: #f15025;
    color: white;
    border-radius: 50%;
    margin: 0.4px;
    color: black;
  }
  .incraise,
  .decraise {
    font-size: 1.2rem;
    padding: 0.2rem;
  }
  @media screen and (min-width: 768px) {

    /* grid-template-columns: 1fr auto; */
  }
`;
export default CartItem;
