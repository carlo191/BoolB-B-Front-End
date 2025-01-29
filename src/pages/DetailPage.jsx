import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/badge/Badge.jsx";

// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import ReviewList from "../components/Review/ReviewList";

export default function DetailPage() {
  const { id } = useParams();
  const { showProperty, property, updateProperty } = useGlobalContext();

  const handleHeartClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    console.log(property);

    updateProperty({
      ...property,
      immagine: property.immagine.split("/").pop(),
      numero_like: property.numero_like + 1,
    });
  };

  // Load Data
  useEffect(() => {
    showProperty(id);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {/* Property Image */}
          <div className="col-12 col-sm-6 immagine-dettaglio">
            <img
              className="img-fluid "
              src={property.immagine}
              alt={property.immagine}
            />

            {/* Badge */}
            <div className="badge-dettaglio">
              <Badge
                tipologia={property.tipologia}
                type={"primary"}
                text={null}
              />
            </div>

            {/* Heart */}
            <span
              className="position-absolute badge rounded-pill heart-pill text-bg-light fs-6 fw-semibold me-2"
              onClick={handleHeartClick}
            >
              <i className="fa-solid fa-heart fa-2xl heart" />
              &nbsp;
              {property.numero_like}
            </span>
          </div>

          {/* Property Description */}
          <div className="col-12 col-sm-6">
            <ul>
              <li>
                <h1>{property.nome}</h1>
              </li>
              <li>
                <strong>Indirizzo: </strong>
                {property.indirizzo}
              </li>
              <li>
                <strong>Numero stanze: </strong>
                {property.numero_stanze}
              </li>
              <li>
                <strong>Numero letti: </strong>
                {property.numero_letti}
              </li>
              <li>
                <strong>Numero bagni: </strong>
                {property.numero_bagni}
              </li>
              <li>
                <strong>Metri quadrati: </strong>
                {property.metri_quadrati}
              </li>
              <li>
                <strong>Email proprietario: </strong>
                {property.email_proprietario}
              </li>
            </ul>
          </div>
        </div>
        {/* Property Details */}
        <div className="row mt-2">
          <div>
            <ReviewList reviews={property.recensioni} />
          </div>
        </div>
      </div>
    </>
  );
}
