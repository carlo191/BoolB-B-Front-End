import React, { useState } from "react";

// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import PropertyCard from "../components/propertyCard/PropertyCard";
import Badge from "../components/badge";

export default function HomePage() {
  const { propertyList } = useGlobalContext();
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="container">
      {/* SearchBar */}
      <h2>Cerca qui:</h2>
      <form className="navbar-form navbar-left mb-5">
        <input
          type="text"
          className="form-control col-lg-8"
          placeholder="..."
          value={search}
          onChange={handleSearch}
        />
      </form>

      {/* Property List */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {propertyList.map(
          (property) =>
            property.nome.toLowerCase().includes(search.toLowerCase()) && (
              <div className="col" key={property.id}>
                <PropertyCard property={property} />
                {property.tipologie &&
                  property.tipologie.map((tipologia, index) => (
                    <Badge key={index} tipologia={tipologia.tipologia}></Badge>
                  ))}
              </div>
            )
        )}
      </div>
    </div>
  );
}
