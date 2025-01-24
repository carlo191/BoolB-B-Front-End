
import { useParams } from "react-router-dom";
import { useGlobalContex } from "../contex/GlobalContex";
import { use } from "react";
export default function DetailPage() {
  const { id } = useParams();
  const {showProperty, property} = useGlobalContex();
  useEffect(() => {showProperty(id)}, [id]);
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
