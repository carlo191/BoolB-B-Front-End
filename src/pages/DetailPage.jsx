import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/badge";

// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import ReviewList from "../components/Review/ReviewList";

export default function DetailPage() {
  const { id } = useParams();
  const { showProperty, property } = useGlobalContext();

  // Load Data
  useEffect(() => {
    showProperty(id);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          {/* Property Image */}
          <div className="col">
            <img
              className="img-fluid"
              src={property.immagine}
              alt={property.immagine}
            />
          </div>

          {property.tipologie &&
            property.tipologie.map((tipologia, index) => (
              <Badge key={index} tipologia={tipologia.tipologia}></Badge>
            ))}

          {/* Property Details */}
          <div className="col">
            <h1>{property.nome}</h1>
            <p>{property.indirizzo}</p>
            <p>{property.descrizione}</p>
            <p>{property.numero_like}</p>
            <div>
              <ReviewList reviews={property.recensioni} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
