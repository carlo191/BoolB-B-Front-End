import { createContext, useContext, useState, useEffect } from "react";

const GlobalContex = createContext();

export const useGlobalContex = () => useContext(GlobalContex);

export const GlobalProvider = ({ children }) => {
  const [propertyList, setPropertyList] = useState([]);
  const [property, setProperty] = useState({});

  const indexProperty = () => {
    fetch(`http://localhost:3000/property`)
      .then((res) => res.json())
      .then((res) =>
        setPropertyList(res.sort((a, b) => b.numero_like - a.numero_like))
      );
  };

  const showProperty = (id) => {
    fetch(`http://localhost:3000/property/${id}`)
      .then((res) => res.json())
      .then((res) => setProperty(res));
  };

  useEffect(() => {
    indexProperty();
  }, []);

  return (
    <GlobalContex.Provider value={{ propertyList, showProperty, property }}>
      {children}
    </GlobalContex.Provider>
  );
};
