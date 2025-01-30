import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import PropertyCard from "../components/propertyCard/PropertyCard";
import CarouselItem from "../components/carouselItem/CarouselItem";
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
    setSearch({ isActived: true, value: e.target.value });
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
      <form className="navbar-form navbar-left mb-5" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Inserisci una città o una via"
              value={search.value}
              onChange={handleSearch}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary w-100">
              <span className="me-2 d-none d-md-inline-block">Cerca</span>
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </button>
          </div>
        </div>
      </form>

      <div className="row d-flex">
        <div className="col-8">
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
              <div className="carousel-inner">
                {propertyListLimit.map((property, index) => (
                  <CarouselItem
                    property={property}
                    key={property.id}
                    isActive={index === 0}
                  />
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-2">
          <h2>I migliori immobili per le persone</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Immobili in evidenza</h2>
        </div>
        {categoryList.map((category) => {
          return (
            <div key={category.id} className="mb-5 mt-5">
              <h2>{category.tipologia}</h2>
              <div className="row">
                {propertyListFiltered.map((property) => {
                  if (property.id_tipologia === category.id) {
                    return (
                      <div className="col-4" key={property.id}>
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
