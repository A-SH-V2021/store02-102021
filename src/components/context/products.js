import React, { useContext, useEffect, useReducer } from "react";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
 
  return (
    <ProductsContext.Provider
      value='hello'
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
