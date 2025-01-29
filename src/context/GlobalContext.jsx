import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
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
    recensioni: [],
    tipologie: [],
  });

  const indexProperty = () => {
    fetch(`http://localhost:3000/property`)
      .then((res) => res.json())
      .then((res) => {
        setPropertyList(res.sort((a, b) => b.numero_like - a.numero_like));
      });
  };

  const showProperty = (id) => {
    fetch(`http://localhost:3000/property/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProperty(res);
      });
  };

  const indexCategory = () => {
    fetch(`http://localhost:3000/category`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryList(res);
      });
  };

  useEffect(() => {
    indexProperty();
    indexCategory();
  }, []);

  // Advanced Research Form Field Data (in SearchPage.jsx)
  const [search, setSearch] = useState({ isActivated: false, value: "" });
  const [tipologia, setTipologia] = useState({
    isActivated: false,
    value: "",
  });
  const [stanze, setStanze] = useState({ isActivated: false, value: "0" });
  const [letti, setLetti] = useState({ isActivated: false, value: "0" });

  return (
    <GlobalContext.Provider
      value={{
        // Property Crud
        showProperty,
        // All Property
        propertyList,
        property,
        // Advanced Research Form Field Data (in SearchPage.jsx)
        search,
        setSearch,
        tipologia,
        setTipologia,
        stanze,
        setStanze,
        letti,
        setLetti,
        // Category
        categoryList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
