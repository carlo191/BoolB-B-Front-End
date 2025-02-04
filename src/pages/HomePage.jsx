import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import PropertyCard from "../components/propertyCard/PropertyCard";
import CarouselButton from "../components/carouselButton/CarouselButton";

export default function HomePage() {
  const {
    propertyListLimit,
    search,
    setSearch,
    propertyListFiltered,
    categoryList,
  } = useGlobalContext();
  const navigate = useNavigate();

  const [filtered, setFiltered] = useState({
    Appartamento: [],
    Villa: [],
    Loft: [],
    Attico: [],
    Monolocale: [],
    Rustico: [],
    Casa_indipendente: [],
  });

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (search.value === "") {
      return;
    } else {
      navigate(`/search`);
    }
  }

  return (
    <div className="container">
      {/* SearchBar */}
      <h2>Ricerca il tuo immobile in modo facile e con un click</h2>
      <form className="mb-5" onSubmit={handleSubmit}>
        <div className="d-flex">
          <div className="flex-grow-1 align-items-center me-2">
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci una città o una via"
              value={search}
              onChange={handleSearch}
            />
          </div>
          <div className="d-flex align-items-center">
            <button type="submit" className="btn btn-primary w-100">
              <span className="me-2 d-none d-md-inline-block">Cerca</span>
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </button>
          </div>
        </div>
      </form>

      {/* Carousel */}
      <h2 className="text-center text-xl mt-4 mb-4">Le soluzioni più votate</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-8 d-flex justify-content-center">
          {/* Carousel */}
          <div className="carousel-container">
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {propertyListLimit.map((property, index) => (
                  <CarouselButton
                    key={property.id}
                    index={index}
                    isActive={index === 0}
                  />
                ))}
              </div>

              {/* Carousel Items */}
              <div className="carousel-inner">
                {propertyListLimit.map((property, index) => (
                  <PropertyCard
                    property={property}
                    key={property.id}
                    isCarouselActive={index === 0}
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <i
                  className="fa-solid fa-2xl fa-circle-left text-darkgray"
                  aria-hidden="true"
                ></i>
                <span className="visually-hidden">Previous</span>
              </button>

              {/* Right Arrow */}
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <i
                  className="fa-solid fa-2xl fa-circle-right text-darkgray"
                  aria-hidden="true"
                ></i>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h2 className="text-center text-xl m-0">Immobili in evidenza</h2>
        </div>
        {categoryList.map((category) => {
          return (
            <div key={category.id} className="col-12 mb-5 mt-4">
              <h2>{category.tipologia}</h2>
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-4">
                {propertyListFiltered.map((property) => {
                  if (property.id_tipologia === category.id) {
                    return (
                      <div className="col" key={property.id}>
                        <PropertyCard property={property} />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
