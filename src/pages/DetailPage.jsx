import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import ReviewList from "../components/Review/ReviewList";

export default function DetailPage() {
  const { id } = useParams();
  const { showProperty, property, indexReview, reviewList } =
    useGlobalContext();

  useEffect(() => {
    showProperty(id);
    indexReview(id);
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid"
              src={property.immagine}
              alt={property.immagine}
            />
          </div>
          <div className="col">
            <h1>{property.nome}</h1>
            <p>{property.indirizzo}</p>
            <p>{property.descrizione}</p>
            <p>{property.numero_like}</p>
            <div>
              <ReviewList reviews={reviewList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
