import { createContext } from "react";
/**
 * Context is liek the blueprint / interface
 * no implementation
 */
const DataContext = createContext({
  cart: [],
  user: {},
  addProductToCart: () => {},
  addProductToCart: () => {},
  clearCart: () => {},
});

export default DataContext;
