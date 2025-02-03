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
        <div className="row mx-0 overflow-y-auto h-100">
          {reviews.map((review) => (
            <ReviewItem review={review} key={review.id} />
          ))}
        </div>
      )}
    </>
  );
}
