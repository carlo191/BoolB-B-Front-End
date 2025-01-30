import { Link } from "react-router-dom";
export default function CarouselItem({ property, isActive }) {
  return (
    <>
      <Link
        to={`/property/${property.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`carousel-item ${isActive ? "active" : ""}`}>
          <img src={property.immagine} className="carousel-image" alt="..." />

          <div className="carousel-caption d-none d-md-block border border-dark bg-black bg-opacity-75">
            <div className="card-body h-100">
              <h5 className="card-title">{property.nome}</h5>
              <p className="card-text">{property.indirizzo}</p>
              <div className="mt-2">
                <ul className="d-flex flex-wrap justify-content-center">
                  <li>
                    <i className="fa-solid fa-house me-2"></i>
                    {property.numero_stanze} stanze
                  </li>
                  <li>
                    <i className="fa-solid fa-bed me-2"></i>
                    {property.numero_letti} camere da letto
                  </li>
                  <li>
                    <i className="fa-solid fa-shower me-2"></i>
                    {property.numero_bagni} bagni
                  </li>
                  <li>
                    <i className="fa-solid fa-ruler-combined me-2"></i>
                    {property.metri_quadrati} mq
                  </li>
                  <li>
                    <i className="fa-solid fa-comment-dots me-2"></i>
                    {property.numero_recensioni} recensioni
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
