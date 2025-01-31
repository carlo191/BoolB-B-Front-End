import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewForm from "../components/Review/ReviewForm";

// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import ReviewList from "../components/Review/ReviewList";
import FormMessage from "../components/formMessage/FormMessage";

export default function DetailPage() {
  const { id } = useParams();
  const { showProperty, property, updateProperty } = useGlobalContext();
  const [reviews, setReviews] = useState([]);

  const handleHeartClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    updateProperty({
      ...property,
      immagine: property.immagine.split("/").pop(),
      numero_like: property.numero_like + 1,
    });
  };

  // Load Data
  useEffect(() => {
    showProperty(id);
  }, [id, showProperty]);

  return (
    <>
      <div className="container">
        <div className="row">
          {/* Property Image */}
          <div className="col-12 col-sm-6 immagine-dettaglio">
            <img
              className="img-fluid rounded-4"
              src={property.immagine}
              alt={property.immagine}
            />

            {/* Heart */}
            <span
              className="position-absolute badge rounded-pill heart-pill-bottom-center text-bg-light fs-6 fw-semibold me-2"
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
              <li className="">
                <h1 className="m-0">{property.nome}</h1>
                <p className="fs-4 m-0 mb-2">{property.tipologia}</p>
                <hr className="mt-3 mb-2" />
              </li>
              <li>
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong>Indirizzo: </strong>
                {property.indirizzo}
              </li>
              <li>
                <i className="fa-solid fa-house me-2"></i>
                <strong>Numero stanze: </strong>
                {property.numero_stanze}
              </li>
              <li>
                <i className="fa-solid fa-bed me-2"></i>
                <strong>Numero letti: </strong>
                {property.numero_letti}
              </li>
              <li>
                <i className="fa-solid fa-shower me-2"></i>
                <strong>Numero bagni: </strong>
                {property.numero_bagni}
              </li>
              <li>
                <i className="fa-solid fa-ruler-combined me-2"></i>
                <strong>Metri quadrati: </strong>
                {property.metri_quadrati}
              </li>
              <li>
                <i className="fa-solid fa-envelope me-2"></i>
                <strong>Email proprietario: </strong>
                {property.email_proprietario}
              </li>
            </ul>
          </div>
        </div>

        <FormMessage />

        {/* Form New Review */}
        <ReviewForm></ReviewForm>

        {/* Review List */}
        <ReviewList reviews={property.recensioni} />
        {reviews.map((review, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{review.nome_utente}</h5>
              <p className="card-text">{review.contenuto}</p>
              <p className="card-text">Voto: {review.voto}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
