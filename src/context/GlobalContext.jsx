import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);
  const [propertyList, setPropertyList] = useState([]);
  const [propertyListFiltered, setPropertyListFiltered] = useState([]);
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

  const indexPropertyFiltered = () => {
    fetch(`http://localhost:3000/propertyFiltered`)
      .then((res) => res.json())
      .then((res) => {
        setPropertyListFiltered(res);
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
        indexPropertyLimit(9);
        indexPropertyFiltered();
      });
  };

  const indexCategory = () => {
    fetch(`http://localhost:3000/category`)
      .then((res) => res.json())
      .then((res) => {
        setCategoryList(res);
      });
  };

  const storeReview = (review) => {
    fetch(`http://localhost:3000/review`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id_immobile: review.id_immobile,
        nome_utente: review.nome_utente,
        contenuto: review.contenuto,
        voto: review.voto,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        showProperty(review.id_immobile);
      });
  };

  const storeProperty = (newProperty) => {
    fetch(`http://localhost:3000/property/${updatedProperty.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: newProperty.nome,
        numero_stanze: newProperty.numero_stanze,
        numero_letti: newProperty.numero_letti,
        numero_bagni: newProperty.numero_bagni,
        metri_quadrati: newProperty.metri_quadrati,
        indirizzo: newProperty.indirizzo,
        email_proprietario: newProperty.email_proprietario,
        immagine: newProperty.immagine,
        numero_like: 0,
        id_proprietario: Math.floor(Math.random() * 35) + 1,
        id_tipologia: newProperty.id_tipologia,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        indexProperty();
        showProperty(updatedProperty.id);
        indexPropertyLimit(9);
        indexPropertyFiltered();
      });
  };

  useEffect(() => {
    indexProperty();
    indexCategory();
    indexPropertyLimit(9);
    indexPropertyFiltered();
  }, []);

  // Advanced Research Form Field Data (in SearchPage.jsx)
  const [search, setSearch] = useState("");
  const [tipologia, setTipologia] = useState("");
  const [stanze, setStanze] = useState("0");
  const [letti, setLetti] = useState("0");

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
        propertyListFiltered,
        storeReview,
        storeProperty,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
