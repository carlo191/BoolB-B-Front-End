// Components
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  return (
    <>
      <h2 className="py-2">
        <i className="fa-solid fa-comment-dots fa-lg me-2"></i>
        Recensioni:
      </h2>

      {reviews.length === 0 ? (
        <p>Non ci sono recensioni</p>
      ) : (
        <div
          className="d-flex flex-column overflow-y-auto"
          style={{
            maxHeight: "400px", // Altezza massima del contenitore per lo scroll
            width: "100%",
            gap: "16px", // Spazio tra le recensioni
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              style={{
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                width: "100%", // La recensione occupa tutta la larghezza disponibile
                minHeight: "120px", // Altezza minima per evitare schiacciamenti
                height: "auto", // La recensione si adatta al contenuto
                overflow: "visible", // Assicura che il contenuto non venga tagliato
                wordWrap: "break-word", // Impedisce che il testo esca dal box
              }}
            >
              <ReviewItem review={review} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
