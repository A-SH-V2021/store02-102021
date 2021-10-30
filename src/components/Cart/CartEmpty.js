import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const CartEmpty = () => {
  const history = useHistory();
  return (
    <Wrapper>
      <div className="center">
        <h3>there's no item to show</h3>
        <button className="btn btn-primary" onClick={() => history.push("/products")}>
          products
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: auto;
  padding: 0 2rem;
  height: 10rem;
  max-width: 768px;
  text-transform: capitalize;
  .center {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .center h3 {
    color: #e30a07;
  }
`;

export default CartEmpty;
