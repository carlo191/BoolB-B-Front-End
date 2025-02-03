// Components
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  return (
    <>
      <h2 className="mb-3 p-0">
        <i className="fa-solid fa-comment-dots fa-lg me-2"></i>
        Recensioni:
      </h2>

      {reviews.length === 0 ? (
        <p>Non ci sono recensioni</p>
      ) : (
        <div className="review-container row row-cols-1 overflow-y-auto custom-scroll">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
      )}
    </>
  );
}
