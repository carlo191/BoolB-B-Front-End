import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import PropertyCard from "../components/propertyCard/PropertyCard";
import Badge from "../components/badge/badge";

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
      <h2>Cerca qui:</h2>
      <form
        className="navbar-form navbar-left mb-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="text"
          className="form-control col-lg-8"
          placeholder="..."
          value={search.value}
          onChange={(e) => handleSearch(e)}
        />

        <button type="submit" className="btn btn-primary mt-2">
          Vai alla ricerca avanzata
        </button>
      </form>

      {/* Property List */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {propertyList.map((property) => (
          <div className="col" key={property.id}>
            <PropertyCard property={property} />
            
          </div>
        ))}
      </div>
    </div>
  );
}
