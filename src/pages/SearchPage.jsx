// Global variables
import PropertyCard from "../components/propertyCard/PropertyCard";
import { useGlobalContext } from "../context/GlobalContext";

export default function SearchPage() {
  const { propertyList, search, setSearch } = useGlobalContext();

  function handleSearch(e) {
    setSearch(e.target.value);
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

        <select class="form-select" aria-label="Default select example">
          <option selected>Tipologia</option>
          <option value="1">Appartamento</option>
          <option value="2">Villa</option>
          <option value="3">Attico</option>
          <option value="4">Loft</option>
          <option value="5">Monolocale</option>
          <option value="6">Baita</option>
          <option value="7">Casa indipendente</option>
          <option value="8">Cottage</option>
          <option value="9">Residenza storica</option>
          <option value="10">Villetta a schiera</option>
        </select>
      </form>

      {propertyList.map(
        (property) =>
          property.indirizzo.toLowerCase().includes(search.toLowerCase()) && (
            <PropertyCard property={property}></PropertyCard>
          )
      )}
    </>
  );
}
