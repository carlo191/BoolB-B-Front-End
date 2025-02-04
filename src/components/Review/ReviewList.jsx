// Components
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
	return (
		<>
			<h2 className="py-2">
				<i className="fa-solid fa-comment-dots fa-lg me-2"></i>       
				Recensioni:{" "}
			</h2>

			{reviews.length === 0 ? (
				<p>Non ci sono recensioni</p>
			) : (
				<div
					className="d-flex row overflow-y-auto"
					style={{
						height: "600px", // Altezza massima del contenitore per lo scroll
						width: "100%",
						gap: "16px", // Spazio tra le recensioni
					}}
				>
					{reviews.map((review) => (
						<div
							key={review.id} // style={{ //   padding: "16px", //   borderRadius: "8px", //   width: "100%", // La recensione occupa tutta la larghezza disponibile //   minHeight: "120px", // Altezza minima per evitare schiacciamenti //   height: "auto", // La recensione si adatta al contenuto //   overflow: "visible", // Assicura che il contenuto non venga tagliato //   wordWrap: "break-word", // Impedisce che il testo esca dal box // }}
						>
							<ReviewItem review={review} />
						</div>
					))}
				</div>
			)}
		</>
	);
}
