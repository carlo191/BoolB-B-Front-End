import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/badge/Badge.jsx";

// Global variables
import { useGlobalContext } from "../context/GlobalContext";

// Components
import ReviewList from "../components/Review/ReviewList";

export default function DetailPage() {
	const { id } = useParams();
	const { showProperty, property, updateProperty } = useGlobalContext();

	const handleHeartClick = (event) => {
		event.stopPropagation();
		event.preventDefault();

		console.log(property);

		updateProperty({
			...property,
			immagine: property.immagine.split("/").pop(),
			numero_like: property.numero_like + 1,
		});
	};

	// Load Data
	useEffect(() => {
		showProperty(id);
	}, []);

	return (
		<>
			<div className="container">
				<div className="row">
					{/* Property Image */}
					<div className="col-12 col-sm-9 immagine-dettaglio">
						<img
							className="img-fluid "
							src={property.immagine}
							alt={property.immagine}
						/>

						{/* Badge */}
						<span className="badge-dettaglio">
							<Badge
								tipologia={property.tipologia}
								type={"primary"}
								text={null}
							/>
						</span>

						{/* Heart */}
						<span
							className="position-absolute badge rounded-pill heart-pill text-bg-light fs-6 fw-semibold me-2"
							onClick={handleHeartClick}
						>
							<i className="fa-solid fa-heart fa-2xl heart" />
							&nbsp;
							{property.numero_like}
						</span>
					</div>

					{/* Property Description */}
					<div className="col-12 col-sm-3">
						<ul>
							<li>
								<h1>{property.nome}</h1>
							</li>
							<li>
								<i className="fa-solid fa-location-dot fa-xl me-2"></i>
								{property.indirizzo}
							</li>
							<li>
								<i className="fa-solid fa-house fa-xl me-2"></i>
								{property.numero_stanze} stanze
							</li>
							<li>
								<i className="fa-solid fa-bed fa-xl me-2"></i>
								{property.numero_letti} camere da letto
							</li>
							<li>
								<i className="fa-solid fa-shower fa-xl me-2"></i>
								<i className="fa-solid fa-toilet fa-xl me-2"></i>
								{property.numero_bagni} bagni
							</li>
							<li>
								<i className="fa-solid fa-ruler-combined fa-xl me-2"></i>
								{property.metri_quadrati} mq
							</li>
							<li>
								<i className="fa-solid fa-envelope fa-xl me-2"></i>
								{property.email_proprietario}
							</li>
						</ul>
					</div>
				</div>
				{/* Property Details */}
				<div className="row mt-2">
					<div>
						<ReviewList reviews={property.recensioni} />
					</div>
				</div>
			</div>
		</>
	);
}
