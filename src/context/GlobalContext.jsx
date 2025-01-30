import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [propertyList, setPropertyList] = useState([]);
  const [propertyListLimit, setPropertyListLimit] = useState([]);
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
        setPropertyList(res);
      });
  };

  const indexPropertyLimit = (limit) => {
    fetch(`http://localhost:3000/property?limit=${limit}`)
      .then((res) => res.json())
      .then((res) => {
        setPropertyListLimit(res);
      });
  };

  const showProperty = (id) => {
    fetch(`http://localhost:3000/property/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProperty(res);
      });
  };

  const updateProperty = (updatedProperty) => {
    fetch(`http://localhost:3000/property/${updatedProperty.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: updatedProperty.nome,
        numero_stanze: updatedProperty.numero_stanze,
        numero_letti: updatedProperty.numero_letti,
        numero_bagni: updatedProperty.numero_bagni,
        metri_quadrati: updatedProperty.metri_quadrati,
        indirizzo: updatedProperty.indirizzo,
        email_proprietario: updatedProperty.email_proprietario,
        immagine: updatedProperty.immagine,
        numero_like: updatedProperty.numero_like,
        id_proprietario: updatedProperty.id_proprietario,
        id_tipologia: updatedProperty.id_tipologia,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        indexProperty();
        showProperty(updatedProperty.id);
        indexPropertyLimit(12);
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
    indexPropertyLimit(9);
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
        updateProperty,
        propertyListLimit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
