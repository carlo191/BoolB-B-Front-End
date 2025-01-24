import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="card p-0 h-100">
      <img
        src={property.immagine}
        className="card-img-top h-100 "
        alt={property.immagine}
      />

      <a className="btn btn-primary heart-btn">
        <i className="fa-regular fa-heart fa-2xl heart"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {property.numero_like}
        </span>
      </a>
      <div className="card-body">
        <h5 className="card-title">{property.nome}</h5>
        <p className="card-text">{property.indirizzo}</p>
        <Link className="btn btn-primary" to={`/property/${property.id}`}>
          Vedi dettaglio
        </Link>
      </div>
    </div>
  );
}
