import { createContext, useContext, useState, useEffect } from "react";

const GlobalContex = createContext();

export const useGlobalContex = () => useContext(GlobalContex);

export const GlobalProvider = ({ children }) => {
  const [propertyList, setPropertyList] = useState([]);

  const indexProperty = () => {
    fetch(`http://localhost:3000/property`)
      .then((res) => res.json())
      .then((res) => setPropertyList(res));
  };

  useEffect(() => {
    indexProperty();
  }, []);

  return (
    <GlobalContex.Provider value={{ propertyList }}>
      {children}
    </GlobalContex.Provider>
  );
};
