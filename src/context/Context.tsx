import { createContext } from "react";
import { ReactNode } from "react";

const Cart = createContext(null);

const Context = ({ children }: { children: ReactNode }) => {
  return <Cart.Provider value={null}>{children}</Cart.Provider>;
};

export default Context;
