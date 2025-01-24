import { useParams } from "react-router-dom";
import { useGlobalContext } from "../contex/GlobalContex"; 
import { useEffect } from "react";

export default function DetailPage() {
  const { id } = useParams();
  const { showProperty, property } = useGlobalContext();

  useEffect(() => {
    showProperty(id); 
  }, [id, showProperty]);

 
  if (!property) {
    return <p>Caricamento in corso...</p>; 
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src={property.immagine} alt={`Immagine di ${property.nome}`} />
        </div>
        <div className="col">
          <h1>{property.nome}</h1>
          <p>{property.indirizzo}</p>
          <p>{property.descrizione}</p>
          <p>Numero di like: {property.numero_like}</p>
        </div>
      </div>
    </div>
  );
}
