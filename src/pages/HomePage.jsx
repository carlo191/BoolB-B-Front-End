import React from "react";
import { useGlobalContex } from "../contex/GlobalContex";

export default function HomePage() {
  const { propertyList } = useGlobalContex();

  return (
    <div>
      {propertyList.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
