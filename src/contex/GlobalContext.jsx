import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [propertyList, setPropertyList] = useState([]);
  const [property, setProperty] = useState({
    id: 0,
    nome: "",
    numero_stanze: 0,
    numero_letti: 0,
    numero_bagni: 0,
    metri_quadri: 0,
    indirizzo: "",
    email_proprietario: "",
    immagine: "",
    tipologia: "",
    numero_like: 0,
    id_proprietario: 0,
  });

  const indexProperty = () => {
    fetch(`http://localhost:3000/property`)
      .then((res) => res.json())
      .then((res) => {
        setPropertyList(res.sort((a, b) => b.numero_like - a.numero_like));
        console.log(res);
      });
  };

  const showProperty = (id) => {
    fetch(`http://localhost:3000/property/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProperty(res);
      });
  };

  useEffect(() => {
    indexProperty();
  }, []);

  return (
    <GlobalContext.Provider value={{ propertyList, showProperty, property }}>
      {children}
    </GlobalContext.Provider>
  );
};
