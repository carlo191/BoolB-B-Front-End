// Global variables
import PropertyCard from "../components/propertyCard/PropertyCard";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const { propertyList, search, setSearch } = useGlobalContext();

  const [tipologia, setTipologia] = useState("");

  const [filteredList, setFilteredList] = useState(propertyList);

  useEffect(() => {
    if (tipologia === "null") {
      setFilteredList(propertyList);
      return;
    }
    const filtered = propertyList.filter((property) =>
      property.tipologia.includes(tipologia)
    );
    setFilteredList(filtered);
  }, [tipologia]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSelect(e) {
    setTipologia(e.target.value);
  }

  return (
    <>
      <form className="navbar-form navbar-left mb-5">
        <input
          type="text"
          className="form-control col-lg-8"
          placeholder="Ricerca per città o via..."
          value={search}
          onChange={(e) => handleSearch(e)}
        />

        <select
          class="form-select"
          aria-label="Default select example"
          value={tipologia}
          onChange={(e) => handleSelect(e)}
        >
          <option value="null" selected>
            Tipologia
          </option>
          <option value="Appartamento">Appartamento</option>
          <option value="Villa">Villa</option>
          <option value="Attico">Attico</option>
          <option value="Loft">Loft</option>
          <option value="Monolocale">Monolocale</option>
          <option value="Baita">Baita</option>
          <option value="Casa indipendente">Casa indipendente</option>
          <option value="Cottage">Cottage</option>
          <option value="Residenza storica">Residenza storica</option>
          <option value="Villetta a schiera">Villetta a schiera</option>
        </select>
      </form>

      {filteredList.map(
        (property) =>
          property.indirizzo.toLowerCase().includes(search.toLowerCase()) && (
            <PropertyCard property={property} key={property.id}></PropertyCard>
          )
      )}
    </>
  );
}
