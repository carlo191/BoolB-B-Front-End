import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

export default function PropertyCard({
	property,
	isCarouselActive = undefined,
}) {
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
			<div
				className={
					"h-100 " +
					(isCarouselActive !== undefined &&
						`carousel-item ${isCarouselActive ? "active" : ""}`)
				}
			>
				<div className="card property-card p-0 h-100">
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
					<div className="card-body position-relative">
						<h5 className="card-title mb-1">{property.nome}</h5>
						<hr className="my-2" />

						<p className="card-text">
							<strong>Indirizzo:</strong> &nbsp;
							{property.indirizzo}
						</p>

						<div className="mt-3">
							<ul className="d-flex flex-wrap mb-4">
								<li>
									<i className="fa-solid fa-house me-2"></i>
									{property.tipologia}
								</li>
								<li>
									<i className="fa-solid fa-door-closed me-2"></i>
									{property.numero_stanze}{" "}
									{property.numero_stanze == 1 ? "stanza" : "stanze"}&nbsp;
								</li>
								<li>
									<i className="fa-solid fa-bed me-2"></i>
									{property.numero_letti}{" "}
									{property.numero_letti == 1 ? "posto letto" : "posti letto"}
									&nbsp;
								</li>
								<li>
									<i className="fa-solid fa-shower me-2"></i>
									{property.numero_bagni}{" "}
									{property.numero_bagni == 1 ? "bagno" : "bagni"} &nbsp;
								</li>
								<li>
									<i className="fa-solid fa-ruler-combined me-2"></i>
									{property.metri_quadrati} mq &nbsp;
								</li>
								<li>
									<i className="fa-solid fa-comment-dots me-2"></i>
									{property.numero_recensioni}{" "}
									{property.numero_recensioni == 1
										? "recensione"
										: "recensioni"}{" "}
									&nbsp;
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
