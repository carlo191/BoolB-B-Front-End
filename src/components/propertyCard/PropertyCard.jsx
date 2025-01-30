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
			<div className="card property-card p-0 position-relative">
				{/* Property Image */}
				<img
					src={property.immagine}
					className="card-img-top "
					alt={property.immagine}
				/>
				{/* Badge */}
				<span className="position-absolute top-5 start-0 mt-1 ms-2">
					<Badge tipologia={property.tipologia} type={"primary"} text={null} />
				</span>

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
				<div className="card-body h-100">
					<h5 className="card-title">{property.nome}</h5>
					<p className="card-text">{property.indirizzo}</p>
					<div className="d-flex flex-wrap gap-2 mt-2">
						<Badge
							tipologia={property.numero_stanze}
							type={"success"}
							text={"Stanze: "}
						/>
						<Badge
							tipologia={property.numero_letti}
							type={"success"}
							text={"Letti: "}
						/>
						<Badge
							tipologia={property.numero_bagni}
							type={"success"}
							text={"Bagni: "}
						/>
						<Badge
							tipologia={property.metri_quadrati}
							type={"success"}
							text={"Metri quadrati: "}
						/>
						<Badge
							tipologia={property.numero_recensioni}
							type={"success"}
							text={"Recensioni: "}
						/>
					</div>
				</div>
			</div>
		</Link>
	);
}
