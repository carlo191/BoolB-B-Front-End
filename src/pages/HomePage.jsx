import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import PropertyCard from "../components/propertyCard/PropertyCard";

export default function HomePage() {
  const { propertyList, search, setSearch } = useGlobalContext();
  const navigate = useNavigate();

  function handleSearch(e) {
    setSearch({ isActived: true, value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (search.value === "") {
      return;
    } else {
      navigate(`/search`);
    }
  }

  return (
    <div className="container">
      {/* SearchBar */}
      <h2>Ricerca il tuo immobile in modo facile e con un click</h2>
      <form className="navbar-form navbar-left mb-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci una città o una via"
              value={search.value}
              onChange={handleSearch}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary w-100">
              Vai alla ricerca avanzata
            </button>
          </div>
        </div>
      </form>

      {/* Property List */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {propertyList.map((property) => (
          <div className="col" key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <h2> Continua a esplorare le nostre soluzioni immobiliari</h2>
        <button className="btn btn-primary">Mostra altro</button>
      </div>
    </div>
  );
}
