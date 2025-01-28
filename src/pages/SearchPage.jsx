import PropertyCard from "../components/propertyCard/PropertyCard";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const { propertyList, search, setSearch } = useGlobalContext();
  const [tipologia, setTipologia] = useState("");
  const [stanze, setStanze] = useState("");
  const [letti, setLetti] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filtered = propertyList.filter(
      (property) =>
        property.tipologia.includes(tipologia) &&
        property.indirizzo.toLowerCase().includes(search.toLowerCase()) &&
        property.numero_stanze >= stanze &&
        property.numero_letti >= letti
    );
    setFilteredList(filtered);
  }, [tipologia, search, propertyList, stanze, letti]);

  return (
    <div className="container">
      <form
        className="navbar-form navbar-left mb-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="form-control col-lg-8"
          placeholder="Ricerca per città o via..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="form-select"
          aria-label="Seleziona tipologia"
          value={tipologia}
          onChange={(e) => setTipologia(e.target.value)}
        >
          <option value="">Tipologia</option>
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

        <input
          type="number"
          className="form-control col-lg-8"
          placeholder="numero minimo stanze"
          value={stanze}
          onChange={(e) => setStanze(e.target.value)}
        />
        <input
          type="number"
          className="form-control col-lg-8"
          placeholder="numero minimo posti letto"
          value={letti}
          onChange={(e) => setLetti(e.target.value)}
        />
      </form>

      {filteredList.map((property) => (
        <PropertyCard property={property} key={property.id}></PropertyCard>
      ))}
    </div>
  );
}
