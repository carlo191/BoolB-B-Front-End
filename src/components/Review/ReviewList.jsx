// Components
import ReviewItem from "./ReviewItem";

export default function ReviewList({ reviews }) {
  return (
    <>
      <h2 className="py-2">Recensioni: </h2>

      <div className="row mx-0">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id} />
        ))}
      </div>
    </>
  );
}
