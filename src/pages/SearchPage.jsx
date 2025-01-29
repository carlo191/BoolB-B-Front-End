import PropertyCard from "../components/propertyCard/PropertyCard";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const {
    propertyList,
    search,
    setSearch,
    tipologia,
    setTipologia,
    stanze,
    setStanze,
    letti,
    setLetti,
  } = useGlobalContext();
  const [filteredList, setFilteredList] = useState([]);

  const applyFilters = () => {
    let filtered = propertyList.filter((property) => {
      // Check the filters:
      // Search
      if (
        search.value &&
        !property.indirizzo.toLowerCase().includes(search.value.toLowerCase())
      )
        return false;
      // Tipologia
      if (
        tipologia.isActivated &&
        tipologia.value &&
        property.tipologia !== tipologia.value
      )
        return false;

      // Stanze
      const stanzeNumber = parseInt(stanze.value);
      if (
        stanze.isActivated &&
        !isNaN(stanzeNumber) &&
        property.numero_stanze < stanzeNumber
      )
        return false;
      // Letti
      const lettiNumber = parseInt(letti.value);
      if (
        letti.isActivated &&
        !isNaN(lettiNumber) &&
        property.numero_letti < lettiNumber
      )
        return false;

      return true;
    });

    setFilteredList(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [propertyList, search, tipologia, stanze, letti]);

  return (
    <div className="container">
      {/* Sidebar */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasFilter"
      >
        {/* Opening Button */}
        <button
          className="btn btn-primary offcanvas-btn position-absolute translate-middle mt-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasFilter"
        >
          <i className="fa-solid fa-filter" />
        </button>

        {/* Sidebar Header */}
        <div className="offcanvas-header">
          <h5 className="offcanvas-title"> Filtri</h5>
        </div>

        {/* Sidebar Body */}
        <div className="offcanvas-body">
          {/* Form Advanced Filters */}
          <form
            className="navbar-form navbar-left mb-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="row row-cols-1 g-3">
              {/* City, address */}
              <div className="col">
                {/* Description */}
                <label htmlFor="searchInput" className="form-label">
                  Città o Indirizzo:
                </label>

                <div className="d-flex align-items-center">
                  {/* Input Field */}
                  <input
                    type="text"
                    id="searchInput"
                    className="form-control"
                    placeholder="..."
                    value={search.value}
                    onChange={(e) =>
                      setSearch({ ...search, value: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Type */}
              <div className="col">
                <label htmlFor="typeInput" className="form-label">
                  Tipologia:
                </label>

                <div className="d-flex align-items-center">
                  {/* Activation Box */}
                  <input
                    type="checkbox"
                    id="typeActivation"
                    className="form-check-input big-checkbox m-0 me-3"
                    checked={tipologia.isActivated}
                    onChange={(e) => {
                      setTipologia({
                        ...tipologia,
                        isActivated: e.target.checked,
                      });
                    }}
                  />

                  {/* Input Field */}
                  <select
                    id="typeInput"
                    className="form-select"
                    disabled={!tipologia.isActivated}
                    value={tipologia.value}
                    onChange={(e) => {
                      setTipologia({ ...tipologia, value: e.target.value });
                    }}
                  >
                    <option disabled value="">
                      Seleziona Tipologia
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
                    <option value="Villetta a schiera">
                      Villetta a schiera
                    </option>
                  </select>
                </div>
              </div>

              {/* Rooms number */}
              <div className="col">
                <label htmlFor="roomsNumberInput" className="form-label">
                  Numero stanze:
                </label>

                <div className="d-flex align-items-center">
                  {/* Activation Box */}
                  <input
                    type="checkbox"
                    id="roomsActivation"
                    className="form-check-input big-checkbox m-0 me-3"
                    checked={stanze.isActivated}
                    onChange={(e) => {
                      setStanze({ ...stanze, isActivated: e.target.checked });
                    }}
                  />

                  {/* Input Field */}
                  <input
                    type="number"
                    id="roomsNumberInput"
                    className="form-control"
                    min="0"
                    inputMode="numeric"
                    disabled={!stanze.isActivated}
                    value={stanze.value}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setStanze({ ...stanze, value });
                      }
                    }}
                  />
                </div>
              </div>

              {/* Beds number */}
              <div className="col">
                <label htmlFor="bedsNumberInput" className="form-label">
                  Numero letti:
                </label>

                <div className="d-flex align-items-center">
                  {/* Activation Box */}
                  <input
                    type="checkbox"
                    id="bedsActivation"
                    className="form-check-input big-checkbox m-0 me-3"
                    checked={letti.isActivated}
                    onChange={(e) => {
                      setLetti({ ...letti, isActivated: e.target.checked });
                    }}
                  />

                  {/* Input Field */}
                  <input
                    type="number"
                    id="bedsNumberInput"
                    className="form-control"
                    min="0"
                    inputMode="numeric"
                    disabled={!letti.isActivated}
                    value={letti.value}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setLetti({ ...letti, value });
                      }
                    }}
                  />
                </div>
              </div>

              {/* Apply Filters Button */}
              <div className="col">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={applyFilters}
                >
                  Applica Filtri
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Showing Filtered Properties */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredList.map((property) => (
          <div className="col" key={property.id}>
            <PropertyCard property={property} />
          </div>
        ))}
      </div>
    </div>
  );
}
