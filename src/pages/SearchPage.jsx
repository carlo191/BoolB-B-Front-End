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
    categoryList,
    navbarOpen,
  } = useGlobalContext();
  const [filteredList, setFilteredList] = useState([]);

  const applyFilters = () => {
    let filtered = propertyList.filter((property) => {
      // Check the filters:
      // Search
      if (!property.indirizzo.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      // Tipologia
      if (!property.tipologia.toLowerCase().includes(tipologia.toLowerCase())) {
        return false;
      }
      // Stanze
      const stanzeNumber = parseInt(stanze);
      if (!isNaN(stanzeNumber) && property.numero_stanze < stanzeNumber) {
        return false;
      }
      // Letti
      const lettiNumber = parseInt(letti);
      if (!isNaN(lettiNumber) && property.numero_letti < lettiNumber) {
        return false;
      }

      return true;
    });

    setFilteredList(filtered);
  };

  useEffect(() => {
    if (propertyList.length > 0) {
      setFilteredList(propertyList);
      applyFilters();
    }
  }, [propertyList]);

  function handleAdvancedSearchSubmit(e) {
    e.preventDefault();
    applyFilters();
  }

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
          className={
            "btn btn-primary offcanvas-btn position-absolute translate-middle mt-2 " +
            (navbarOpen === true && "d-none")
          }
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasFilter"
        >
          <i className="fa-solid fa-filter" />
        </button>

        {/* Sidebar Header */}
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Filtri</h5>
        </div>

        {/* Sidebar Body */}
        <div className="offcanvas-body">
          {/* Form Advanced Filters */}
          <form
            className="navbar-form navbar-left mb-5"
            onSubmit={handleAdvancedSearchSubmit}
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
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>

              {/* Type */}
              <div className="col">
                <label htmlFor="typeInput" className="form-label">
                  Tipologia:
                </label>

                <div className="d-flex align-items-center">
                  {/* Input Field */}
                  <select
                    id="typeInput"
                    className="form-select"
                    value={tipologia}
                    onChange={(e) => {
                      setTipologia(e.target.value);
                    }}
                  >
                    <option value="">Seleziona Tipologia</option>
                    {categoryList.map((category) => (
                      <option
                        key={category.tipologia}
                        value={category.tipologia}
                      >
                        {category.tipologia}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Rooms number */}
              <div className="col">
                <label htmlFor="roomsNumberInput" className="form-label">
                  Numero stanze:
                </label>

                <div className="d-flex align-items-center">
                  {/* Input Field */}
                  <input
                    type="number"
                    id="roomsNumberInput"
                    className="form-control"
                    min="0"
                    inputMode="numeric"
                    value={stanze}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setStanze(e.target.value);
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
                  {/* Input Field */}
                  <input
                    type="number"
                    id="bedsNumberInput"
                    className="form-control"
                    min="0"
                    inputMode="numeric"
                    value={letti}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (/^\d*$/.test(value)) {
                        setLetti(e.target.value);
                      }
                    }}
                  />
                </div>
              </div>

              {/* Apply Filters Button */}
              <div className="col d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-primary w-25 mt-2"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasFilter"
                >
                  Cerca
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Showing Filtered Properties */}
      {filteredList.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
          {filteredList.map((property) => (
            <div className="col" key={property.id}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-5">
          <h2 className="mt-5">
            Nessun risultato trovato{" "}
            <i className="fa-regular fa-face-sad-tear"></i>
          </h2>
        </div>
      )}
    </div>
  );
}
