import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/badge/Badge.jsx";

// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import ReviewList from "../components/Review/ReviewList";

export default function DetailPage() {
  const { id } = useParams();
  const { showProperty, property, updateProperty } = useGlobalContext();
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    testo: "",
    voto: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setReviews([...reviews, formData]);
    setFormData({ nome: "", testo: "", voto: 1 });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

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
              className="img-fluid "
              src={property.immagine}
              alt={property.immagine}
            />

            {/* Badge */}
            <span className="badge-dettaglio">
              <Badge
                tipologia={property.tipologia}
                type={"primary"}
                text={null}
              />
            </span>

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
          <div></div>
        </div>
      </div>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            placeholder="nome"
            value={formData.nome}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="testo" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="testo"
            rows="3"
            value={formData.testo}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="voto" className="form-label">
            Voto
          </label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            id="voto"
            placeholder="1"
            value={formData.voto}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Aggiungi Recensione
        </button>
      </form>

      <div className="mt-4">
        <ReviewList reviews={property.recensioni} />
        {reviews.map((review, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              <h5 className="card-title">{review.nome}</h5>
              <p className="card-text">{review.testo}</p>
              <p className="card-text">Voto: {review.voto}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
