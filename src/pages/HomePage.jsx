import React from "react";
import { useGlobalContex } from "../contex/GlobalContex";
import PropertyCard from "../components/propertyCard/PropertyCard";

export default function HomePage() {
  const { propertyList } = useGlobalContex();

  return (
    <div className="container">
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
