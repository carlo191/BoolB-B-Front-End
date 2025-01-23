import { createContext, useContext } from "react";

const GlobalContex = createContext();

export const useGlobalContex = () => useContext(GlobalContex);

export const GlobalProvider = ({ children }) => {
  return <GlobalContex.Provider value={{}}>{children}</GlobalContex.Provider>;
};
