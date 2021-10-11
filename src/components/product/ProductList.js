import React from "react";
import styled from "styled-components";
import Product from "./Product";

const ProductsList = ({ title, products }) => {
  console.log(products);
  return (
    <Wrapper className="section">
      <h1 className="section-title">{title}</h1>
      <div className="products-center">
        {products.map((item) => {
          return <Product key={item.id} {...item}/>
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products-center {
    width: var(--smallWidth);
    margin: 0 auto;
    max-width: var(--fullWidth);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 1.8rem;
    row-gap: 1.8rem;
    /* align-items: start; */
  }
`;

export default ProductsList;
