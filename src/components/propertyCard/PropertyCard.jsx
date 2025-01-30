import { Link } from "react-router-dom";
import Badge from "../badge/Badge";
import { useGlobalContext } from "../../context/GlobalContext";

export default function PropertyCard({ property }) {
  const { updateProperty } = useGlobalContext();

  const handleHeartClick = (event) => {
    event.stopPropagation(); // Impedisce che l'evento si propaghi al genitore
    event.preventDefault(); // Impedisce il comportamento predefinito del Link

    updateProperty({
      ...property,
      immagine: property.immagine.split("/").pop(),
      numero_like: property.numero_like + 1,
    });
  };

  return (
    <Link to={`/property/${property.id}`}>
      <div className="card property-card p-0 ">
        {/* Property Image */}
        <img
          src={property.immagine}
          className="card-img-top "
          alt={property.immagine}
        />

        {/* Heart */}
        <span
          className="position-absolute badge rounded-pill heart-pill-top-right text-bg-light fs-6 fw-semibold"
          onClick={handleHeartClick}
        >
          <i className="fa-solid fa-heart fa-xl heart" />
          &nbsp;
          {property.numero_like}
        </span>

        {/* Property Description */}
        <div className="card-body h-100 position-relative">
          {/* Badge */}
          <span className="position-absolute card-badge mt-1 ms-2">
            <Badge
              tipologia={property.tipologia}
              type={"primary"}
              text={null}
            />
          </span>

          <h5 className="card-title">{property.nome}</h5>
          <p className="card-text">{property.indirizzo}</p>

          <div className="mt-2">
            <ul className="d-flex flex-wrap mb-1">
              <li>
                <i className="fa-solid fa-house me-2"></i>
                {property.numero_stanze} stanze &nbsp;
              </li>
              <li>
                <i className="fa-solid fa-bed me-2"></i>
                {property.numero_letti} camere da letto &nbsp;
              </li>
              <li>
                <i className="fa-solid fa-shower me-2"></i>
                {property.numero_bagni} bagni &nbsp;
              </li>
              <li>
                <i className="fa-solid fa-ruler-combined me-2"></i>
                {property.metri_quadrati} mq &nbsp;
              </li>
              <li>
                <i className="fa-solid fa-comment-dots me-2"></i>
                {property.numero_recensioni} recensioni &nbsp;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
}
