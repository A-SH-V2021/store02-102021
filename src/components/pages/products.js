import React from "react";
import ProductsList from "../product/ProductList";
import { useProductsContext } from "../context/products";
import Loading from "../Loading";

const Products = () => {
  const { loading, products } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <ProductsList title="our products" products={products}/>
    </>
  );
};

export default Products;
