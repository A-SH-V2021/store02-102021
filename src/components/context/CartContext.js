import React, { useContext, useEffect, useState } from "react";
// import Localcart from "../../utils/localCart";
import { single_product_url as urll } from "../../utils/content";
import axios from "axios";
const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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

  const decreaseHandle = (id, amount) => {
    if (amount === 1) {
      removeItem(id);
    } else {
      const newArray = [...cart].map((item) => {
        return item.id === id
          ? { ...item, amount: item.amount - 1 }
          : { ...item };
      });
      setCart(newArray);
    }
  };
  const addToCart = async (x) => {
    const productDetails = await axios.get(`${urll}${x}`).then((item) => {
      return item.data;
    });
    console.log(productDetails);
    const { id, name, price, stock, images } = productDetails;
    const product = [...cart].find((item) => item.id === id);
    if (product) {
      increaseHandle(id);
      return;
    } else {
      const image = images[0].url;
      const newItems = { id, name, price, amount: 1, image };
      let newCart = [...cart, newItems];
      setCart(newCart);
    }
  };

  const clearCart = () => {
    setCart([]);
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
        clearCart,
        addToCart,
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
