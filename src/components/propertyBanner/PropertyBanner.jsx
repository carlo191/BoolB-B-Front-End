import { Link } from "react-router-dom";

export default function PropertyBanner({ property }) {
  const handleHeartClick = (event) => {
    event.stopPropagation(); // Impedisce che l'evento si propaghi al genitore
    event.preventDefault(); // Impedisce il comportamento predefinito del Link

    // onLike(property.id); // Chiama una funzione per mettere like
  };

  return (
    <Link to={`/property/${property.id}`}>
      <div className="card property-card p-0 position-relative w-100">
        {/* Property Image */}
        <img
          src={property.immagine}
          className="card-img-top"
          alt={property.immagine}
        />

        {/* Heart */}
        <span
          className="position-absolute badge rounded-pill heart-pill text-bg-light fs-6 fw-semibold"
          onClick={handleHeartClick}
        >
          <i className="fa-solid fa-heart fa-2xl heart" />
          &nbsp;
          {property.numero_like}
        </span>

        {/* Property Description */}
        <div className="card-body">
          <h5 className="card-title">{property.nome}</h5>
          <p className="card-text">{property.indirizzo}</p>
        </div>
      </div>
    </Link>
  );
}
