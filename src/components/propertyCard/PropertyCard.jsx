export default function PropertyCard({ property }) {
  return (
    <div className="card p-0 h-100">
      <img
        src={property.immagine}
        className="card-img-top"
        alt={property.immagine}
      />
      <div className="card-body">
        <h5 className="card-title">{property.nome}</h5>
        <p className="card-text">{property.indirizzo}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}
