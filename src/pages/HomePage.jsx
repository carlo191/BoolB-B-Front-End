import React, { useState } from "react";
import { useGlobalContex } from "../contex/GlobalContex";
import PropertyCard from "../components/propertyCard/PropertyCard";

export default function HomePage() {
  const { propertyList } = useGlobalContex();

  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="container">
      <form className="navbar-form navbar-left my-5">
        <input
          type="text"
          className="form-control col-lg-8"
          placeholder="Cerca"
          value={search}
          onChange={handleSearch}
        />
      </form>

      <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
        {propertyList.map(
          (property) =>
            property.nome.toLowerCase().includes(search.toLowerCase()) && (
              <div className="col" key={property.id}>
                <PropertyCard property={property} />
              </div>
            )
        )}
      </div>
    </div>
  );
}
