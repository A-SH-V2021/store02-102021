import React, { useContext, useEffect, useState } from "react";
import { products_url as url } from "../../utils/content";
import axios from "axios";
import Login from "../pages/Login";
const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState([]);
  // const [feature, setFeature] = useState([]);

  const fetchData = async (url) => {
    setLoading(true);
    const response = await axios(url).then((res) => res.data);

    try {
      if (response) {
        setLoading(false);
        setProducts(response);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log(`there is an error get data:${error}`);
    }
  };

  const handleDetails = (id) => {
    const detailsOfItem = products.filter((item) => item.id === id);
    setDetails(detailsOfItem);
  };

  useEffect(() => {
    fetchData(url);
    return () => {};
  }, []);

  return (
    <ProductsContext.Provider value={{ loading, products, handleDetails,details }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
