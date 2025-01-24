import { useParams } from "react-router-dom";
export default function DetailPage() {
  const { id } = useParams();
    return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={property.immagine} alt={property.immagine} />
        </div>
        <div className="col">
          <h1>{property.nome}</h1>
          <p>{property.indirizzo}</p>
          <p>{property.descrizione}</p>
          <p>{property.numero_like}</p>
        </div>
      </div>
    </div>
  );
}
