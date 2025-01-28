import PropertyCard from "../components/propertyCard/PropertyCard";
import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

export default function SearchPage() {
  const {
    // All Property
    propertyList,
    // Advanced Research Form Field Data (in SearchPage.jsx)
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

  useEffect(() => {
    let filtered = propertyList.filter((property) => {
      // Check the filters:
      // Search
      if (
        search.isActivated === true &&
        property.indirizzo
          .toLowerCase()
          .includes(search.value.toLowerCase()) === false
      )
        return false;
      // Tipologia
      if (
        tipologia.isActivated === true &&
        (property.tipologia === tipologia.value) === false
      )
        return false;

      // Stanze
      const stanzeNumber = parseInt(stanze.value);
      if (!isNaN(stanzeNumber))
        if (
          stanze.isActivated === true &&
          property.numero_stanze >= stanzeNumber === false
        )
          return false;
      // Letti
      const lettiNumber = parseInt(letti.value);
      if (!isNaN(lettiNumber))
        if (
          letti.isActivated === true &&
          property.numero_letti >= lettiNumber === false
        )
          return false;

      return true;
    });

    setFilteredList(filtered);
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
          <h5 className="offcanvas-title">Advanced filters</h5>
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
                  City or Address:
                </label>

                <div className="d-flex align-items-center">
                  {/* Activation Box */}
                  <input
                    type="checkbox"
                    id="searchActivation"
                    className="form-check-input big-checkbox m-0 me-3"
                    value=""
                    defaultChecked={search.isActivated}
                    onClick={(e) => {
                      setSearch({ ...search, isActivated: e.target.checked });
                    }}
                  ></input>

                  {/* Input Field */}
                  <input
                    type="text"
                    id="searchInput"
                    className="form-control"
                    placeholder="..."
                    disabled={!search.isActivated}
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
                  Type:
                </label>

                <div className="d-flex align-items-center">
                  {/* Activation Box */}
                  <input
                    type="checkbox"
                    id="searchActivation"
                    className="form-check-input big-checkbox m-0 me-3"
                    value=""
                    defaultChecked={tipologia.isActivated}
                    onClick={(e) => {
                      setTipologia({
                        ...tipologia,
                        isActivated: e.target.checked,
                      });
                    }}
                  ></input>

                  {/* Input Field */}
                  <select
                    id="typeInput"
                    className="form-select"
                    disabled={!tipologia.isActivated}
                    value={tipologia.value}
                    onChange={(e) => {
                      setTipologia({ ...tipologia, value: e.target.value });
                      console.log(tipologia);
                    }}
                  >
                    <option defaultValue="Appartamento">Appartamento</option>
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
                  Rooms Number:
                </label>

                <div className="d-flex align-items-center">
                  {/* Activation Box */}
                  <input
                    type="checkbox"
                    id="searchActivation"
                    className="form-check-input big-checkbox m-0 me-3"
                    value=""
                    defaultChecked={stanze.isActivated}
                    onClick={(e) => {
                      setStanze({ ...stanze, isActivated: e.target.checked });
                    }}
                  ></input>

                  {/* Input Field */}
                  <input
                    type="number"
                    id="roomsNumberInput"
                    className="form-control"
                    disabled={!stanze.isActivated}
                    value={stanze.value}
                    onChange={(e) =>
                      setStanze({ ...stanze, value: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Beds number */}
              <div className="col">
                <label htmlFor="bedsNumberInput" className="form-label">
                  Beds Number:
                </label>

                <div className="d-flex align-items-center">
                  {/* Activation Box */}
                  <input
                    type="checkbox"
                    id="searchActivation"
                    className="form-check-input big-checkbox m-0 me-3"
                    value=""
                    defaultChecked={letti.isActivated}
                    onClick={(e) => {
                      setLetti({ ...letti, isActivated: e.target.checked });
                    }}
                  ></input>

                  {/* Input Field */}
                  <input
                    type="number"
                    id="bedsNumberInput"
                    className="form-control"
                    disabled={!letti.isActivated}
                    value={letti.value}
                    onChange={(e) =>
                      setLetti({ ...letti, value: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Showing Filtered Properties */}
      {filteredList.map((property) => (
        <PropertyCard property={property} key={property.id}></PropertyCard>
      ))}
    </div>
  );
}
