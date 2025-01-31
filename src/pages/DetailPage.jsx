import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import ReviewList from "../components/Review/ReviewList";

const addReviewToDatabase = (review) =>
  fetch("http://localhost:3000/reviews", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      nome: review.nome_utente,
      testo: review.contenuto,
      voto: review.voto,
      id_immobile: review.id_immobile,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error("Errore:", err));

export default function DetailPage() {
  const { id } = useParams();
  const { showProperty, property, updateProperty } = useGlobalContext();
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    nome: "",
    testo: "",
    voto: 1,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { ...formData, id_immobile: id };

    const addedReview = await addReviewToDatabase(newReview);

    if (addedReview) {
      setReviews([...reviews, addedReview]);
      setFormData({ nome: "", testo: "", voto: 1 });
    }
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
        <div className="row row-cols-1 row-cols-md-2 g-3 g-md-5 mx-1">
          {/* Property Image */}
          <div className="immagine-dettaglio p-0">
            <img
              className="img-fluid rounded-4 detail-img"
              draggable="false"
              src={property.immagine}
              alt={property.immagine}
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
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
          <div className="">
            <ul>
              <li className="">
                <h1 className="m-0">{property.nome}</h1>

                <hr className="my-1" />

                <p className="fs-4 m-0 mb-2">
                  <strong>Indirizzo: </strong>
                  {property.indirizzo}
                </p>
              </li>
              <li>
                {/* <i className="fa-solid fa-location-dot me-2"></i> */}
                <i className="fa-solid fa-house me-2"></i>
                <strong>Tipologia: </strong>
                {property.tipologia}
              </li>
              <li>
                <i className="fa-solid fa-door-closed me-2"></i>
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

        {/* Form New Review */}
        <div className="border rounded-5 my-5 p-4">
          <h2 className="mb-3">
            <i className="fa-solid fa-pencil fa-md me-2"></i>
            Scrivi la tua recensione:
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              {/* Username Input */}
              <label htmlFor="nome" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                value={formData.nome_utente}
                onChange={handleChange}
              />
            </div>
            {/* Description Input */}
            <div className="mb-3">
              <label htmlFor="testo" className="form-label">
                Testo:
              </label>
              <textarea
                className="form-control"
                id="testo"
                rows="3"
                value={formData.contenuto}
                onChange={handleChange}
              ></textarea>
            </div>
            {/* Vote Input */}
            <div className="mb-3">
              <label htmlFor="voto" className="form-label">
                Voto:
              </label>
              <input
                type="number"
                min="1"
                max="5"
                className="form-control"
                id="voto"
                value={formData.voto}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <button type="submit" className="btn btn-primary">
              Aggiungi recensione
            </button>
          </form>
        </div>

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

        {/* Zoom Image Modal */}
        <div
          class="modal modal-lg fade"
          id="imageModal"
          tabindex="-1"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content bg-transparent border-0">
              <div class="modal-body">
                <img
                  className="img-fluid rounded-4 detail-img"
                  src={property.immagine}
                  alt={property.immagine}
                />

                <h1 className="text-center text-light mt-3">{property.nome}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
