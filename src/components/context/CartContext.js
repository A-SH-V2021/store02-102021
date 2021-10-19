import React, { useContext, useEffect, useState } from "react";
import Localcart from "../../utils/localCart";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  
  const [cart, setCart] = useState(Localcart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  return (
    <CartContext.Provider value={{ cart, total, cartItems }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
