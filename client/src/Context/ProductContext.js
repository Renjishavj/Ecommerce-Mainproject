import { useContext, createContext, useState } from "react";
const ProductContext = createContext(null);

//states
export const ProductContextProvider = ({ children }) => {
const [selectedProduct, setSelectedProduct] = useState({});

  //functions

  const setProductDetails = (product) => {
    setSelectedProduct(product);
    
  };


  //exports
  let data = {
    selectedProduct,
    setProductDetails,
  };

  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
};

export const useProduct = () => {
  return useContext(ProductContext);
};
