import React from "react";
import ProductsList from "./ProductList";
import { useProductsContext } from "../context/products";
const FeaturedProducts = () => {
  const { products } = useProductsContext();
  const data = products.slice(0, 4);
  return (
    <div>
      <ProductsList title="some of products" products={data} />
    </div>
  );
};

export default FeaturedProducts;
