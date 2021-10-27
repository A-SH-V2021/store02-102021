import React, { useContext, useEffect, useState } from "react";
import Localcart from "../../utils/localCart";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(Localcart);
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    let newCartItem = cart.reduce((total, item) => {
      return (total += item.amount);
    }, 0);

    setCartItems(newCartItem);
    let newTotal = cart.reduce((total, item) => {
      return (total += item.amount * item.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  const removeItem = (id) => {
    const newItems = cart.filter((item) => item.id !== id);
    setCart(newItems);
  };

  const increaseHandle = (id) => {
    const newArray = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newArray);
  };

  const decreaseHandle = (id,amount) => {
    if (amount===1) {
      removeItem(id)
    } else {
      const newArray = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newArray);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseHandle,
        decreaseHandle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
