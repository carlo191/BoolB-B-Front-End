import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/badge/badge.jsx";

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
					<div className="col-6 immagine-dettaglio">
						<img
							className="img-fluid "
							src={property.immagine}
							alt={property.immagine}
						/>
						<div className="badge-dettaglio">
							<Badge
								tipologia={property.tipologia}
								icona={property.icona}
							></Badge>
						</div>
						{/* Heart */}
						<span
							className="position-absolute badge rounded-pill heart-pill text-bg-light fs-6 fw-semibold me-2"
							// onClick={handleHeartClick}
						>
							<i className="fa-solid fa-heart fa-2xl heart" />
							&nbsp;
							{property.numero_like}
						</span>
					</div>
					<div className="col-6">
						<h1>{property.nome}</h1>
						<p>{property.indirizzo}</p>
						<p>{property.descrizione}</p>
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
